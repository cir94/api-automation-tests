import { expect } from 'chai';
import { apiGet } from '../superagent-modules.js';

describe('ReqRes API - List <RESOURCE> Test', function() {
    it('should get a list of information', async function() {
      let req = await apiGet('https://reqres.in/api/unknown');
      expect(req.statusCode).to.equal(200);
      expect(req.body.data).to.have.lengthOf(6);
      expect(req.body.data[5].name).to.equal('blue turquoise');
    });
});