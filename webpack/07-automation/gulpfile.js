var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var webpack_config = require("./webpack.config.js");


gulp.task("webpack", function(callback) {

  webpack(webpack_config, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  });

});


gulp.task("webpack-dev-server", function(callback) {

  var compiler = webpack(webpack_config);

  new WebpackDevServer(compiler, {
    publicPath: webpack_config.publicPath
  }).listen('8080', 'localhost', function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
  });

});
