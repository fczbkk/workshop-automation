module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['concat:js']
      },
      css: {
        files: ['css/*.css'],
        tasks: ['concat:css']
      }
    },

    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/all.js',
        options: {
          banner: '/*\n<%= pkg.name %>\nv<%= pkg.version %>\n<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n\n'
        }
      },
      css: {
        src: ['css/*.css'],
        dest: 'build/all.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['watch']);

};
