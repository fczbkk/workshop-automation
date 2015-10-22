module.exports = function (grunt) {

  grunt.initConfig({

    mytask: {
      aaa: 'bbb',
      ccc: 'ddd'
    }

  });

  grunt.registerMultiTask('mytask', 'Zobrazi data z configu.', function () {
    grunt.log.writeln('Toto je task ' + this.name);
    grunt.log.writeln('Target: ' + this.target);
    grunt.log.writeln('Data: ' + this.data);
  });

};
