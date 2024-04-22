import { expect } from 'chai';
import { envs } from '../url-module.js';
import { apiSend } from '../superagent-modules.js';

describe('ReqRes API - Login Test', function () {
  let loginSuccess, loginFail;
  before(async function () {
    envs.apiTestingUrl.pathname = '/api/login';
    loginSuccess = await apiSend(`${envs.apiTestingUrl}`, {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    });
    loginFail = await apiSend(`${envs.apiTestingUrl}`, {
      email: 'peter@klaven',
    });
  });

  it('Should test for a successful login and a failed one', async function () {
    expect(loginSuccess.statusCode).to.equal(200);
    expect(loginSuccess.body.token).to.equal(`QpwL5tke4Pnpja7X4`);
    expect(loginFail.response.body).to.include({ error: 'Missing password' });
  });
});
