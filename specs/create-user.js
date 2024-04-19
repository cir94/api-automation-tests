import { apiSend } from '../superagent-modules.js';
import { envs } from '../url-module.js';
import { expect } from 'chai';

describe('ReqRes API - Creating a new user', function () {
  it('should write information to the user object', async function () {
    envs.apiTestingUrl.pathname = '/api/users';
    let req = await apiSend(`${envs.apiTestingUrl}`, {
      name: 'morpheus',
      job: 'leader',
    });
    expect(req.body.name).to.equal('morpheus');
  });
});
