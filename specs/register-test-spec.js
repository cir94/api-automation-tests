import { expect } from 'chai';
import { envs } from '../url-module.js';
import { apiSend } from '../superagent-modules.js';

describe('ReqRes API - Registration Test', function () {
  let regSuccess, regFail;
  before(async function () {
    envs.apiTestingUrl.pathname = '/api/register'
    regSuccess = await apiSend(`${envs.apiTestingUrl}`, {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    });
    regFail = await apiSend(`${envs.apiTestingUrl}`, {
      email: 'sydney@fife',
    });
  });

  it('Should test a successful registration and an invalid one', async function () {
    expect(regSuccess.statusCode).to.equal(200);
    expect(regSuccess.body.id).to.equal(4);
    expect(regSuccess.body.token).to.equal('QpwL5tke4Pnpja7X4');
    expect(regFail.response.statusCode).to.equal(400);
    expect(regFail.response.body).to.include({ error: 'Missing password' });
  });
});
