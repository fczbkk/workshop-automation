var gulp = require('gulp');

gulp.task('task-example', function() {
  console.log('Hello world, this is Gulp.');
});

gulp.task('src-example', function () {
  var result = gulp.src('input/*');
  console.log('result', result);
});

gulp.task('dest-example', function () {
  gulp.src('input/*')
    .pipe(gulp.dest('output'));
});

gulp.task('watch-example', function () {
  gulp.watch('input/*', function (event) {
    console.log('event info', event.type, event.path);
  });
});

gulp.task('watch-example2', function () {
  gulp.watch('input/*', ['task-example']);
});
