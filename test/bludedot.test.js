require('dotenv').config();

const Bluedot = require('../lib/Bluedot');

const { EMAIL, PASSWORD } = process.env;

jest.setTimeout(30000);

describe('Bluedot', () => {
    test('Simple test', async () => {
        if (!EMAIL || !PASSWORD) {
            return;
        }
        const bluedot = new Bluedot({
            email: EMAIL,
            password: PASSWORD,
            debug: true,
        });

        const projects = await bluedot.api.getProjects();
        expect(Array.isArray(projects)).toEqual(true);

        const project = projects[0];

        const zones = await bluedot.api.getZones({
            projectId: project._id,
            limit: 1000,
        });
        expect(Array.isArray(zones)).toEqual(true);

        const zone = await bluedot.api.getZoneById(zones[0]._id);
        expect(typeof zone).toEqual('object');
    });
});
