const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);

const {app} = require('./../server.js');

describe('SERVER', () => {
    it('GET / should return 404 not found', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                should.exist(res);
                res.should.be.an('object');
                res.should.have.status(404);
                done();    
            });
    });

    it('the port should be 3001', () => {
        process.env.PORT.should.be.a('string');
        process.env.PORT.should.equal('3001');
    });

    it('the NODE_ENV should be test', () => {
        process.env.NODE_ENV.should.equal("test");
        process.env.NODE_ENV.should.be.a('string');
    });
});
