var through = require("through2"),
gutil = require("gulp-util");


function getError (content) {
  return new gutil.PluginError("Test Gulp Plugin", content);
}


module.exports = function (param) {
  "use strict";

  if (!param) {
    throw getError("No param provided.");
  }

  function testGulpPlugin(file, enc, callback) {

    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {

      this.emit("error", getError("Stream content is not supported."));
      return callback();
    }

    if (file.isBuffer()) {

      file.contents = new Buffer(String(file.contents) + "\n" + param);
      this.push(file);

    }
    return callback();
  }

  return through.obj(testGulpPlugin);
};
