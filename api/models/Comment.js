/**
* Comment.js
*
* A comment made on a Post
*/

module.exports = {
  attributes: {
    title: {
      type: 'string'
    },
    value: {
      type: 'string'
    },

    post: {
      model: 'Post'
    }
  }
};

