import { apiSend } from '../superagent-modules.js';
import { expect } from 'chai';

describe('ReqRes API - Creating a new user', function () {
  it('should write information to the user object', async function () {
    let req = await apiSend('https://reqres.in/api/users', {
      name: 'morpheus',
      job: 'leader',
    });
    expect(req.body.name).to.equal('morpheus');
  });
});
