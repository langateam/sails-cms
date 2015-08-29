module.exports = {

  /**
   * Load the skipper adapter module into the skipper connection config
   */
  hydrateFilemanagerConfig: function () {
    var config = sails.config.filemanager.skipper.connection;

    if (config.adapter == 'skipper-disk') return _.omit(config, 'adapter');

    return _.defaults({
      adapter: require(config.adapter)
    }, config);
  },

  /**
   * Convert a model configuration item in sails.config.filemanager.models
   * into a Waterline attribute definition.
   */
  getAttributeDefinition: function (config) {
    var definition = { };
    var attribute = definition[config.attribute] = { };

    if (config.association === 'many') {
      attribute.collection = 'FileDescriptor';
    }
    else if (config.association === 'one') {
      attribute.model = 'FileDescriptor';
    }
    else {
      throw new Error('filemanager model association not recognized:', config.association);
    }

    return attribute;
  }
};
