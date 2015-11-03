module.exports = function (grunt) {

  grunt.initConfig({

    webpack: {
      default: {
        entry: "./src/index.js",
        output: {
          path: './build/',
          filename: "bundle.js"
        },
        watch: true,
        keepalive: true
      }
    },

    'webpack-dev-server': {
      default: {
        keepalive: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-webpack');

};
