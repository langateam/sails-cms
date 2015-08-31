/**
 * SocialEvent.js
 *
 * A timestamped event that occurs on the social network.
 */
module.exports = {
  attributes: {
    type: {
      model: 'Label'
    },
    /*
    targetModel: {
      model: 'Model'
    },
    */
    target: {
      type: 'integer'
    }
  }
};

