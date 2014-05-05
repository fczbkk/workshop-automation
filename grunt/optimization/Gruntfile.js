module.exports = function (grunt) {

  grunt.initConfig({

    coffee: {
      default: {
        expand: true,
        flatten: true,
        cwd: 'src',
        src: ['*.coffee'],
        dest: 'build/',
        ext: '.js'
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
    },

    watch: {
      default: {
        files: ['src/*.coffee'],
        tasks: ['compile']
      }
    }

  });

  grunt.registerTask('compile', 'newer:coffee:default');

  // grunt.loadNpmTasks('grunt-contrib-coffee');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-coffeelint');
  // grunt.loadNpmTasks('grunt-contrib-jasmine');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-newer');

  // JIT - faster module loading and init
  require('jit-grunt')(grunt, {
    "coffee" : "grunt-contrib-coffee",
    "jshint" : "grunt-contrib-jshint",
    "coffeelint" : "grunt-coffeelint",
    "jasmine" : "grunt-contrib-jasmine",
    "watch" : "grunt-contrib-watch",
    "newer" : "grunt-newer"
   });

   // load Grunt tasks using patterns
   // require('load-grunt-tasks')(grunt);

};
