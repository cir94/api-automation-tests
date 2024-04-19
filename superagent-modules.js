import superagent from 'superagent';

/*
Each API call has a specific use

apiGet: Grabs information within an API
apiDelete: Deletes whatever endpoint specified
apiSend: Sends a body of data to the specified endpoint

Each parameter in the functions below are the following -
@param {String} endpoint: The api endpoint being accessed
@param {String/Obj/Int/Array} body: body of data which will be sent to the API

*/

export const apiGet = async function (endpoint) {
  return await superagent.get(endpoint).set('accept', 'application/json');
};

export const apiDelete = async function (endpoint) {
  return await superagent.delete(endpoint).set('accept', 'application/json');
};

export const apiSend = async function (endpoint, body) {
  return await superagent
    .post(endpoint)
    .send(body)
    .catch((err) => {
      let errInfo = err.response;
      console.log(errInfo.statusCode, errInfo.body);
      return err;
    });
};
