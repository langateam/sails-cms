/**
* Forum.js
*
* A container of ForumCategories
*/

module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    },
    rootCategory: {
      model: 'ForumCategory'
    }
  }
};

