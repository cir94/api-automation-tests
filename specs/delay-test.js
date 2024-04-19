import { expect } from 'chai';
import { apiGet } from '../superagent-modules.js';

describe('ReqRes API - Delay Test', function() {
    it('should wait for a delay to finish before retrieving data', async function() {
        let req = await apiGet('https://reqres.in/api/users?delay=3');
        expect(req.body.total).to.equal(12);
    })
})