var _ = require('lodash');

module.exports = {

  /**
   * Load the skipper adapter module into the skipper connection config
   */
  hydrateSkipperConfig: function () {
    var config = sails.config.skipper.connection;

    if (config.adapter == 'skipper-disk') return _.omit(config, 'adapter');

    return _.defaults({
      adapter: require(config.adapter)
    }, config);
  }
};
