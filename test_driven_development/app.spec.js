const app = require('./app');
const request = require('supertest');

describe('GET /users는', (done) => {
  it('슈퍼테스트 실행', () => {
    request(app)
        .get('/users')
        .end((err, res) => {
          console.log(res.body);
          done();
        });
  });
});