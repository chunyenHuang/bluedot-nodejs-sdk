const fs = require('fs');
const path = require('path');

const Bluedot = require('../lib/Bluedot');

const basicDoc = fs.readFileSync(path.join(__dirname, 'doc.md'), 'utf8');

const bluedot = new Bluedot({
    generateApiList: true,
});

const markdownStrings = [
    basicDoc,
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
