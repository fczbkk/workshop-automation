var gulp = require('gulp');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cache = require('gulp-cached');
var remember = require('gulp-remember');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var streamqueue = require('streamqueue');
var eventStream = require('event-stream');
var consolidate = require('gulp-consolidate');


/* straight pipe, with single input and single output */

gulp.task('straight-pipe', function() {
  gulp.src('input/*.coffee')      // <-- input
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest('output/'));  // <-- output
});


/* multiple outputs */

gulp.task('multiple-outputs', function() {
  gulp.src('input/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('output/'))  // <-- first output
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('output/')); // <-- second output
});


/* only changed files are processed */

gulp.task('only-changed', function() {
  gulp.src('input/*.coffee')
    .pipe(cache('coffee'))
    .pipe(coffee())
    .pipe(gulp.dest('output/'));
});

gulp.task('only-changed-watch', function() {
  gulp.watch('input/*.coffee', ['only-changed']);
});


/* process only changed files, then all (incremental rebuild) */

gulp.task('cache-remember', function() {
  gulp.src('input/*.coffee')
    .pipe(cache('coffee'))        // <-- remove unchanged files from stream
    .pipe(coffee())
    .pipe(uglify())
    .pipe(remember('coffee'))     // <-- add unchanged files back to stream
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('output/'));
});


/* async streams */

gulp.task('merge-stream', function() {
  merge(
    gulp.src('input/library.js')
      .pipe(uglify())
      .pipe(gulp.dest('output/')),
    gulp.src('input/*.coffee')
      .pipe(coffee())
      .pipe(gulp.dest('output/'))
  );
});


/* stream queue */

gulp.task('stream-queue', function() {
  streamqueue(
    {objectMode: true},
    gulp.src('input/*.coffee').pipe(coffee()),
    gulp.src('input/library.js').pipe(uglify())
  )
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('output/'));
});


/* stream array */

gulp.task('stream-array', function() {

  var names = ['aaa', 'bbb'];

  var tasks = names.map(function (name){
    return gulp.src('input/template.txt')
      .pipe(rename({
        basename: name,
        extname: '.txt'
      }))
      .pipe(gulp.dest('output'))
  });

  eventStream.concat.apply(null, tasks);

});
