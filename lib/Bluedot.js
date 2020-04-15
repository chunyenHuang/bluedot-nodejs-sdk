const request = require('request-promise');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

/**
 * Bluedot2 Class
 */
class Bluedot2 {
    /**
     * constructor
     * @param {Object} options
     * @param {String} options.email
     * @param {String} options.password
     * @param {String} options.apiUrl defaul: https://us1-config.bluedot.io/prod1
     * @param {Boolean} options.debug
     * @param {Boolean} options.generateApiList
     */
    constructor({
        email,
        password,
        apiUrl = 'https://us1-config.bluedot.io/prod1',
        debug = false,
        generateApiList = false,
    }) {
        this.email = email;
        this.password = password;
        this.apiUrl = apiUrl;

        this.debug = debug;
        this.generateApiList = generateApiList;

        this.idToken;
        this.accessToken;
        this.refreshToken;
        this.expiredAt;

        this.apiList = {};
        this.api = {};
        this.registerMethods();
    }

    /**
     * log
     * @param  {...any} args
     */
    log(...args) {
        if (this.debug) {
            console.log(args);
        }
    }

    /**
     * registerMethods
     */
    registerMethods() {
        const docFile = path.join(__dirname, '../docs/swagger.yml');
        const { paths } = yaml.safeLoad(fs.readFileSync(docFile, 'utf8'));

        Object.keys(paths).forEach((uri) => {
            Object.keys(paths[uri])
                // ignore options
                .filter((method) => method !== 'options')
                .forEach((method) => {
                    const { summary, description, operationId, parameters = [], tags = [] } = paths[uri][method];
                    const pathParameter = parameters.find((item) => item.required && item.in === 'path');
                    const requiredQueryFields = parameters.filter((item) => item.required && item.in === 'query');

                    this.api[operationId] = async (...args) => {
                        let pathParam;
                        let qs = {};
                        let body = {};
                        let options = {};

                        console.log(uri);
                        if (uri.indexOf('{') && pathParameter) {
                            pathParam = args[0];
                            uri = uri.replace(`{${pathParameter.name}}`, pathParam);
                        }

                        switch (method) {
                        case 'get':
                            options = {
                                method: 'GET',
                                uri,
                            };

                            qs = pathParam ? args[1] : args[0];
                            if (qs) {
                                options.qs = qs;
                            }
                            break;
                        case 'post':
                            body = pathParam ? args[1] : args[0];
                            options = {
                                method: 'POST',
                                uri,
                                body,
                                json: true,
                            };
                            break;
                        case 'patch':
                            body = pathParam ? args[1] : args[0];
                            options = {
                                method: 'PATCH',
                                uri,
                                body,
                                json: true,
                            };
                            break;
                        case 'put':
                            body = pathParam ? args[1] : args[0];
                            options = {
                                method: 'PUT',
                                uri,
                                body,
                                json: true,
                            };
                            break;
                        case 'delete':
                            options = {
                                method: 'DELETE',
                                uri,
                            };
                            break;
                        default:
                        }

                        // check query string
                        requiredQueryFields.forEach(({ name }) => {
                            if (qs[name] === undefined) {
                                throw new Error(`${name} is required in query string.`);
                            }
                        });

                        this.log(options);

                        return this.makeRequest(options);
                    };

                    if (this.generateApiList) {
                        this.apiList[tags[0]] = this.apiList[tags[0]] || [];

                        let sample = '';
                        let arg = '';

                        if (pathParameter) {
                            if (method !== 'get' && method !== 'delete') {
                                arg = ', body';
                            }
                            sample = `await bluedot.api.${operationId}(${pathParameter.name}${arg});`;
                        } else {
                            if (method === 'get') {
                                arg = 'query';
                                if (requiredQueryFields.length > 0) {
                                    arg = `{ ${requiredQueryFields.map(({ name }) => name).join(', ')} }`;
                                }
                            } else {
                                arg = 'body';
                            }
                            sample = `await bluedot.api.${operationId}(${arg});`;
                        }
                        this.apiList[tags[0]].push({
                            method: operationId,
                            path: `${method.toUpperCase()}: ${uri}`,
                            summary,
                            description,
                            sample,
                            url: `https://config-docs.bluedot.io/#operation/${operationId}`,
                        });
                    }
                });
        });
    }

    /*
     *************
     *** Auth ***
     *************
     */

    /**
     * login
     * @return {Promise}
     */
    async login() {
        const options = {
            method: 'POST',
            uri: `${this.apiUrl}/sessions`,
            body: {
                email: this.email,
                password: this.password,
            },
            json: true,
        };

        const {
            idToken,
            accessToken,
            refreshToken,
        } = await request(options);

        this.idToken = idToken;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    /**
     * refresh
     * @return {Promise}
     */
    async refresh() {
        const options = {
            method: 'PUT',
            uri: `${this.apiUrl}/sessions`,
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            },
            body: {
                refreshToken: this.refreshToken,
            },
            json: true,
        };
        const {
            idToken,
            accessToken,
            refreshToken,
            expiresIn,
        } = await request(options);

        this.idToken = idToken;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.expiredAt = Date.now() + expiresIn * 1000;
    }

    /**
     * makeRequest
     * @param {Object} options
     * @param {Array} paginationData
     * @return {Promise}
     */
    async makeRequest(options, paginationData = []) {
        if (!this.accessToken || !this.refreshToken) {
            await this.login();
            await this.refresh();
        } else
        if (this.expiredAt <= Date.now()) {
            await this.refresh();
        }

        options = Object.assign(options, {
            uri: options.uri.startsWith(this.apiUrl) ? options.uri : `${this.apiUrl}${options.uri}`,
            headers: Object.assign((options.headers || {}), {
                Authorization: `Bearer ${this.accessToken}`,
            }),
            resolveWithFullResponse: true,
        });

        this.log(options);

        const {
            headers,
            body,
        } = await request(options);

        let data = JSON.parse(body);

        // merge data
        if (paginationData.length > 0 && Array.isArray(data)) {
            data = [...paginationData, ...data];
        }
        // handle pagination;
        if (headers['x-bluedot-paginationtoken']) {
            console.log(headers['x-bluedot-paginationtoken'] === options.headers.paginationToken);
            options.headers.paginationToken = headers['x-bluedot-paginationtoken'];

            return this.makeRequest(options, data);
        }

        return data;
    }
}

module.exports = Bluedot2;
