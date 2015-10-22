module.exports = function (grunt) {

  grunt.registerTask('default', 'Spusti vsetky ostatne tasky v danom poradi', [
    'create', 'copy', 'delete'
  ]);

  grunt.registerTask('create', 'Vytvori subor.', function () {
    grunt.file.write('aaa.txt', 'bbb', {encoding: 'utf-8'});
  });

  grunt.registerTask('copy', 'Skopiruje subor.', function () {
    grunt.file.copy('aaa.txt', 'ccc.txt');
  });

  grunt.registerTask('delete', 'Zmaze povodny subor.', function () {
    grunt.file.delete('aaa.txt');
  });

};
