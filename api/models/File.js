/**
* File.js
*/
module.exports = {
  
  globalId: 'FileEntity',

  attributes: {
    fd: {
      model: 'FileDescriptor'
    },
    data: {
      type: 'bytea'
    },
    dirname: {
      type: 'string'
    }
  }
};

