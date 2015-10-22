module.exports = function (grunt) {

  grunt.initConfig({

    autoprefixer: {
      default: {
        options: {
          browsers: '> 1%'
        },
        src: 'source/style.css',
        dest: 'build/autoprefixed-style.css'
      }
    },

    less: {
      default: {
        options: {
          sourceMap: true
        },
        files: {
          'build/style.css': 'source/style.less'
        }
      }
    },

    coffee: {
      default: {
        options: {
          sourceMap: true
        },
        files: {
          'build/functions.js': 'source/functions.coffee'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');

};
