module.exports = function (grunt) {

  grunt.loadTasks('tasks');

  grunt.registerTask('task1', function () {
    grunt.log.writeln('Toto je task #1.');
  });

};
