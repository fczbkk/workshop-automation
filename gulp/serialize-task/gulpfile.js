var gulp = require('gulp');

gulp.task('aaa', function(callback) {
  console.log('This is task `aaa`.');
  callback();
});

gulp.task('bbb', ['aaa'], function() {
  console.log('Task `aaa` should be finished by now.');
  console.log('This is task `bbb`.');
});

gulp.task('ccc', ['bbb', 'aaa'], function() {
  console.log('This is task `ccc`.');
  console.log('Task `aaa` should be first, even if it is defined second.');
});
