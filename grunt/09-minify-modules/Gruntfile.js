module.exports = function (grunt) {

  grunt.initConfig({

    cssmin: {
      default: {
        files: {
          'build/style.css': ['source/*.css']
        }
      }
    },

    uglify: {
      default: {
        files: {
          'build/functions.js': ['source/*.js']
        }
      }
    },

    htmlmin: {
      default: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/index.html': ['source/index.html']
        }
      }
    },

    compress: {
      default: {
        options: {
          archive: 'build/archive.zip'
        },
        files: [
          {
            expand: true,
            cwd: 'build/',
            src: ['**', '!*.zip'],
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-compress');

};
