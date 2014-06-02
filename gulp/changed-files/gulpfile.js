var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  gulp.src('input/*')
    .pipe(watch())
    .pipe(gulp.dest('output/'))
});
