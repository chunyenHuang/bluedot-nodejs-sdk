# bluedot-nodejs-sdk

[![npm version](https://badge.fury.io/js/bluedot-nodejs-sdk.svg)](https://badge.fury.io/js/bluedot-nodejs-sdk)
![Node.js Package](https://github.com/chunyenHuang/bluedot-nodejs-sdk/workflows/Node.js%20Package/badge.svg)

## GetStarted

```javascript
const Bluedot = require('bluedot-nodejs-sdk');

const bluedot = new Bluedot({ email, password });

const projects = await bluedot.api.getProjects();

const zones = await bluedot.api.getZones({ projectId: PROJECT_ID, limit: 1000 });

```

## V1
For V1 please use the official guide:  
https://github.com/Bluedot-Innovation/PublicAPI-Client-Node
