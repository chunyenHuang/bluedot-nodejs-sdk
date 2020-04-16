const fs = require('fs');
const path = require('path');

const Bluedot = require('../lib/Bluedot');

const bluedot = new Bluedot({
    generateApiList: true,
});

const markdownStrings = [
    '# bluedot-nodejs-sdk',
];

markdownStrings.push(`
## GetStarted

\`\`\`javascript
const Bluedot = require('bluedot-nodejs-sdk');

const bluedot = new Bluedot({ email, password });

const projects = await bluedot.api.getProjects();
\`\`\`
`);

markdownStrings.push(`
## API Documentation for Bluedot V2 
- https://config-docs.bluedot.io/  
- https://docs.bluedot.io/config-api/  
`);

Object.keys(bluedot.apiList)
    .filter((key) => key !== 'undefined')
    .forEach((key) => {
        markdownStrings.push(`### ${key}`);
        bluedot.apiList[key].forEach(({ method, path, sample, url, summary }) => {
            markdownStrings.push(`#### ${method}`);
            summary && markdownStrings.push(`${summary}  `);
            markdownStrings.push(`[${url}](${url})  `);
            markdownStrings.push(`
\`\`\`javascript
# ${path}
${sample}
\`\`\`
            `);
        });
    });

markdownStrings.push(`
## V1
For V1 please use the official guide:  
https://github.com/Bluedot-Innovation/PublicAPI-Client-Node
`);

fs.writeFileSync(path.join(__dirname, '../README.md'), markdownStrings.join('\r\n'), 'utf8');
