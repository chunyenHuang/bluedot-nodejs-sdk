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
## API Documentation for Bluedot V2 
- https://config-docs.bluedot.io/  
- https://docs.bluedot.io/config-api/  
`);

Object.keys(bluedot.apiList)
    .filter((key) => key !== 'undefined')
    .forEach((key) => {
        markdownStrings.push(`### ${key}`);
        bluedot.apiList[key].forEach(({ method, path, sample, url, summary, description }) => {
            markdownStrings.push(`#### [${method}](${url})`);
            summary && markdownStrings.push(`${summary}  `);
            description && markdownStrings.push(`${description}  `);

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
