var assert = require('assert');
var supertest = require('supertest');
var request = supertest('localhost:1337');

describe('FileController', function () {
  var fd;

  describe('#upload', function () {
    it('should upload a file and return a FileDescriptor', function (done) {
      request
        .post('/file/upload')
        .attach('upload', require('path').resolve(__dirname, './testfile.txt'))
        .expect(200)
        .end(function (err, res) {
          assert(res.body);
          assert.equal(res.body.length, 1);
          assert.equal(res.body[0].filename, 'testfile.txt');
          fd = res.body[0].fd;

          done(err);
        });
    });
  });
  describe('#download', function () {
    it('should download a file, given a FileDescriptor', function (done) {
      request
        .get('/file/download/' + encodeURIComponent(fd))
        .expect(200)
        .parse(function (res, fn) {
          res.setEncoding('binary');
          res.data = '';
          res.on('data', function (chunk) {
            res.data += chunk;
          });
          res.on('end', function () {
            fn(null, new Buffer(res.data, 'binary'));
          });
        })
        .end(function (err, res) {
          if (err) return done(err);

          assert(Buffer.isBuffer(res.body));
          assert.equal(res.body.toString('ascii').trim(), 'filemanager-test');

          done();
        });
    });
  });
});
