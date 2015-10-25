var gulp = require('gulp');


/* zakladny task */

gulp.task('basic', function() {
  console.log('Toto je task.');
});


/* gulp-src (minimatch) */

gulp.task('src', function() {
  var result = gulp.src('input/*.+(js|txt)');
  console.log('src', result);
});


/* gulp-dest (vinyl) */

gulp.task('dest', function() {
  gulp.src('input/**/*')
    .pipe(gulp.dest('output'));
});


/* gulp-watch */

gulp.task('watch', function() {
  gulp.watch('input/*', function(event) {
    console.log('event', event.type, event.path);
  });
});


/* watch and call task */

gulp.task('watch2', function() {
  gulp.watch('input/*', ['basic']);
});


/* chaining and dependencies */

gulp.task('aaa', function() {
  console.log('aaa');
});

gulp.task('bbb', ['aaa'], function() {
  console.log('bbb');
});

gulp.task('ccc', ['bbb', 'aaa'], function() {
  console.log('ccc');
});
