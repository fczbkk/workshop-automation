var gulp = require('gulp');
var merge = require('merge-stream');

gulp.task('default', function(cb) {
  merge(
    gulp.src('aaa/*.js')
      .pipe(gulp.dest('ccc')),
    gulp.src('bbb/*.js')
      .pipe(gulp.dest('ddd'))
  );
});
