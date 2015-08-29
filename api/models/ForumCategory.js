/**
* ForumCategory.js
*
* A Category
*/

module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    },
    parentCategory: {
      model: 'ForumCategory'
    },
    threads: {
      collection: 'ForumThread',
      via: 'category'
    }
  }
};

