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

        const testZones = zones.filter((x, index) => index < 5);

        await Promise.all(
            testZones.map(async ({ _id }) => {
                const zone = await bluedot.api.getZoneById(_id);
                expect(typeof zone).toEqual('object');
                expect(zone._id).toEqual(_id);
            }),
        );
    });
});
