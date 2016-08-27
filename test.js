
//require imports that part of lib to js file
//should and expect are assertions, test driven and behavior driven
//before get test to store info in object
//then test to test that info in the object


/*failed tutorial
var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://api.worldbank.org');


describe('country', function(){
  it('should return a 200 response', function(done){
  api.get('/countries/ru')
  .set('Accept', 'application/json')
  .expect(200,done);
  });
});
*/
/*
var assert = require('chai').assert;
describe('country', function()){
  describe('#indexOf()', function(){
    it('should return 200 if it loves meeee', function(){
      assert.equal();
      assert.equal();
    });
    });
  });
*/
/*var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://api.worldbank.org')

describe("ballooons", function(){
    expect(2+2).equals(4);

      });

*/

/*
var expect = require('chai').expect;

describe("a test", function() {
  var fn;
  before(function() {
    fn = function(err, callback){
        if(err) throw new Error('failure');

        return callback();
    }
  });

  it("should throw error", function() {
    expect(fn('error')).to.throw(Error);
  });
  it("should return hi", function() {
    var callback = function() { return 'hi' };
    expect(fn(null, callback).to.equal('hi');
  });
});
*/

var expect = require('chai').expect;

var AriesUnite = require('./test');

describe('AriesUnite', function(){
  it('should work!', function(){
    expect(true).to.be.true;

  });
});

var expect = require('chai').expect(),
supertest = require('supertest'),
api = supertest('http://api.worldbank.org');


describe('country', function(){
  it('should return a 200 response', function(done){
  api.get('/countries/ru')
  .set('Accept', 'application/json')
  .expect(200,done);

  describe('all', function()){
    it('should be an array of strings!', function(done){
    api.get('/countries')
    .set('Accept', 'application/json')
    .expect(countries.all).to.satisfy(isArrayOfStrings);

    function isArrayOfStings(array){
      return array.every(function(item){
        return typeof item === 'string';

      });
    }
  };

  });
  });
});

/*
var expect = require('chai').expect;

var AriesUnite = require('./test');

describe("country", function() {
  it('should return country abbreviation', function(){
    expect()
  })
  });
*/

//this is test.js
var request = require('supertest');
var assert = require('assert');

//here we load our server.js as a module
//WE"VE GOT A PROBLEMO HERE says "cannot find module"
//var server = require('../server');


describe('Server', function(){
  describe('GET /get-data', function(){
    it('responds with default data', function(done){
      request(server)
        .get('/get-data')
        .end(function(err,res){
          //Make sure there was no error
          assert.equal(err,null);

          var body = res.body;
          assert.equal(body.data, 'default data');

          //Finish asynchonous test
          done();
        });
    });
  });

  describe('POST /set-data', function(){
    it('responds with success', function(done){
      request(server)
        .post('/set-data')
        .send({data: 'new data'})
        .end(function(err, res){
          assert.equal(err, null);
          var body = res.body;
          assert.equal(body.result, 'success');
          done();
        });
  });
});

  describe('GET /get-data', function(){
    it('responds with new data', function(done){
      request(server)
        .get('/get-data')
        .end(function(err, res){
          assert.equal(err, null);
          var body = res.body;
          assert.equal(body.data, 'new data');
          done();
        });
    });
  });
});



