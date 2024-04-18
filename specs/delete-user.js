import { expect } from 'chai';
import { apiDelete } from '../superagent-modules.js';

describe('ReqRes API - Delete User', function () {
  it('should delete the user in the given URL', async function () {
    let req = await apiDelete('https://reqres.in/api/users/2');
    expect(req.statusCode).to.equal(204);
  });
});
