import { expect } from 'chai';
import { envs } from '../url-module.js';
import { apiDelete } from '../superagent-modules.js';

describe('ReqRes API - Delete User', function () {
  it('should delete the user in the given URL', async function () {
    envs.apiTestingUrl.pathname = '/api/users/2'
    let req = await apiDelete(`${envs.apiTestingUrl}`);
    expect(req.statusCode).to.equal(204);
  });
});
