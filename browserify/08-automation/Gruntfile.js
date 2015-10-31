module.exports = function (grunt) {

  grunt.initConfig({

    browserify: {
      default: {
        files: {
          './build/bundle.js': './src/index.js'
        }
      }
    },

    watch: {
      default: {
        files: ['src/*.js'],
        tasks: ['browserify']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['watch']);

};
