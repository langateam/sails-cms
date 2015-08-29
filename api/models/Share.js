/**
 * Share.js
 *
 * Representation of a "share" action; that is, a user shares some object with
 * another User or Group.
 */
module.exports = {
  attributes: {
    document: {
      type: 'integer'
    },
    documentType: {
      model: 'Model'
    },
    recipient: {
      type: 'integer'
    },
    recipientType: {
      model: 'Model'
    }
  }
};

