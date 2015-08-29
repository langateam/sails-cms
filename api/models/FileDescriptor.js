/**
* FileDescriptor.js
*/
module.exports = {
  autoPK: false,

  attributes: {
    id: {
      type: 'string',
      primaryKey: true
    },
    name: {
      type: 'string'
    },
    filename: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    size: {
      type: 'integer'
    }
  },

  beforeValidate: function (descriptor, next) {
    descriptor.id = descriptor.fd;
    next();
  } 
};
