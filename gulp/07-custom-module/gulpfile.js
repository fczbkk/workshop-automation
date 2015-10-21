var gulp = require('gulp');
var test = require('../test-gulp-plugin');

gulp.task('default', function() {
  gulp.src('input/*.txt')
    .pipe(test('xxx'))
    .pipe(gulp.dest('output/')
  );
});
