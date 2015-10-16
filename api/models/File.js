/**
* File.js
*/
module.exports = {
  
  globalId: 'FileEntity',

  attributes: {
    fd: {
      model: 'FileDescriptor',
      primaryKey: true
    },
    data: {
      type: 'binary'
    },
    dirname: {
      type: 'string'
    }
  }
};

