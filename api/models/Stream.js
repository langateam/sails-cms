/**
 * Stream.js
 *
 * A collection of Messages
 */
module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    messages: {
      collection: 'Message',
      via: 'stream'
    }
  }
};

