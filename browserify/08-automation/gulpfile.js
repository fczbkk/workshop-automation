var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');

gulp.task('js', function() {
  gulp.src('src/index.js')
    .pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', function() {
  gulp.watch('src/*.js', ['js']);
});
