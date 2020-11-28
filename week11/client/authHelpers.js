makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com',
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
      }
    });
// if a token was passed in we should send it on.




  async function makeRequest(url, method = 'GET', body = null, token = null)

  export {makeRequest};