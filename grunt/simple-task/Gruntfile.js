module.exports = function (grunt) {

  grunt.registerTask('default', 'Zobrazi info hlasku.', function () {
    grunt.log.writeln('Toto je task ' + this.name);
  });

  grunt.registerTask('write', 'Ulozi obsah do suboru.', function (filepath, content) {
    grunt.file.write(filepath, content, {encoding: 'utf-8'});
  });

};
