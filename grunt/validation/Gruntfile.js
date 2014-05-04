module.exports = function (grunt) {

  grunt.initConfig({

    coffee: {
      library: {
        files: {
          'build/library.js': 'source/library.coffee'
        }
      },
      test: {
        files: {
          'test/library.spec.js': 'test/library.spec.coffee'
        }
      }
    },

    jshint: {
      default: [
        'build/*.js'
      ]
    },

    coffeelint: {
      default: [
        'source/*.coffee'
      ]
    },

    jasmine: {
      default: {
        src: 'build/library.js',
        options: {
          specs: 'test/*.spec.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

};
