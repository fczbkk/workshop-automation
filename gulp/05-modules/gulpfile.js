var gulp = require('gulp');


/* concat */

var concat = require('gulp-concat');

gulp.task('concat', function() {
  gulp.src('input/*.txt')
    .pipe(concat('texts.txt'))
    .pipe(gulp.dest('output/'));
});


/* CoffeeScript */

var coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src('input/*.coffee')
    .pipe(coffee())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('output/'));
});


/* Coffee Lint */

var coffeelint = require('gulp-coffeelint');

gulp.task('coffeelint', function() {
  gulp.src('input/*.coffee')
  .pipe(coffeelint())
  .pipe(coffeelint.reporter())
  .pipe(coffeelint.reporter('fail'));
});


/* uglify JavaScript */

var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  gulp.src('input/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('output/'));
});


/* LESS */

var less = require('gulp-less');

gulp.task('less', function() {
  gulp.src('input/*.less')
  .pipe(less())
  .pipe(gulp.dest('output/'));
});


/* minify CSS */

var minifyCss = require('gulp-minify-css');

gulp.task('minify-css', function() {
  gulp.src('input/*.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('output/'));
});


/* CSS autoprefixer */

var autoprefix = require('gulp-autoprefixer');

gulp.task('autoprefix', function() {
  gulp.src('input/*.css')
  .pipe(autoprefix({
    browsers: ['> 1%', 'last 2 versions']
  }))
  .pipe(gulp.dest('output/'));
});


/* images optimization */

var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');

gulp.task('imagemin', function() {
  gulp.src('input/*.jpg')
  .pipe(imagemin({
    progressive: true,
    use: [jpegtran()]
  }))
  .pipe(gulp.dest('output/'));
});


/* image resize */

var imageResize = require('gulp-image-resize');

gulp.task('image-resize', function() {
  gulp.src('input/*.jpg')
  .pipe(imageResize({
    width: 200
  }))
  .pipe(gulp.dest('output/'));
});
