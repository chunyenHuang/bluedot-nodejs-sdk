const fs = require('fs');
const path = require('path');

const Bluedot = require('../lib/Bluedot');

const bluedot = new Bluedot({
    generateApiList: true,
});
const markdownStrings = ['# API Documentation'];

Object.keys(bluedot.apiList)
    .filter((key) => key !== 'undefined')
    .forEach((key) => {
        markdownStrings.push(`## ${key}`);
        bluedot.apiList[key].forEach(({ method, path, sample, url, summary, description }) => {
            markdownStrings.push(`### [${method}](${url})`);
            markdownStrings.push(` - \`${path}\`  `);
            summary && markdownStrings.push(` - ${summary}  `);
            description && markdownStrings.push(` - ${description}  `);
            markdownStrings.push(`\`\`\`${sample}\`\`\``);
        });
    });

fs.writeFileSync(path.join(__dirname, 'documentation.md'), markdownStrings.join('\r\n'), 'utf8');
