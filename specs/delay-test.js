import { expect } from 'chai';
import { envs } from '../url-module.js';
import { apiGet } from '../superagent-modules.js';

describe('ReqRes API - Delay Test', function() {
    it('should wait for a delay to finish before retrieving data', async function() {
        // typical usage of envs.apiTestingURL.pathname would create a URL using percentage encoding which wouldn't work with the API as it wouldn't encode it properly when called. Until further research can be done on how to fix that, it'll be using the new URL method from node.js to properly append the right URL to the envs.apiTestingUrl function.
        
        const delayURL = new URL('/api/users?delay=3', envs.apiTestingUrl)
        let req = await apiGet(delayURL);
        expect(req.body.total).to.equal(12);
    })
})