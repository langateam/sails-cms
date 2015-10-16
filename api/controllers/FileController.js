var _ = require('lodash');

/**
 * FileController
 *
 * Upload and Download files.
 */
module.exports = {

  upload: function (req, res) {
    var config = FileService.hydrateSkipperConfig();

    req.file(req.query.fieldName || 'upload').upload(config, function afterFileUpload (err, files) {
      if (err) return res.negotiate(err);

      sails.models.filedescriptor.create(_.defaults({ }, files[0], req.body))
        .then(res.ok)
        .catch(res.negotiate);
    });
  },

  download: function (req, res) {
    var config = sails.config.skipper.connection;
    var SkipperAdapter = require(config.adapter);
    var id = req.param('id');

    sails.models.filedescriptor.findOne(id)
      .then(function (fileDescriptor) {
        SkipperAdapter(_.clone(config)).read({ fd: id }, function (err, file) {
          if (err) return res.negotiate(err);

          res.contentType(fileDescriptor.type);
          //res.setHeader('Content-disposition', 'attachment; filename=' + fileDescriptor.filename); 
          res.send(file)
        });
      })
      .catch(res.negotiate);
  }
};
