gulp = require 'gulp'


# concat
concat = require 'gulp-concat'
gulp.task 'concat', ->
  gulp.src 'input/*.txt'
    .pipe concat 'texts.txt'
    .pipe gulp.dest 'output/'


# CoffeeScript
coffee = require 'gulp-coffee'
gulp.task 'coffee', ->
  gulp.src 'input/*.coffee'
    .pipe coffee()
    .pipe gulp.dest 'output/'


# Coffee Lint
coffeelint = require 'gulp-coffeelint'
gulp.task 'coffeelint', ->
  gulp.src 'input/*.coffee'
    .pipe coffeelint()
    .pipe coffeelint.reporter()
    .pipe coffeelint.reporter 'fail'


# uglify JavaScript
uglify = require 'gulp-uglify'
gulp.task 'uglify', ->
  gulp.src 'input/*.js'
    .pipe uglify()
    .pipe gulp.dest 'output/'


# LESS
less = require 'gulp-less'
gulp.task 'less', ->
  gulp.src 'input/*.less'
    .pipe less()
    .pipe gulp.dest 'output/'


# minify CSS
minifyCss = require 'gulp-minify-css'
gulp.task 'minify-css', ->
  gulp.src 'input/*.css'
    .pipe minifyCss()
    .pipe gulp.dest 'output/'


# CSS autoprefixer
autoprefix = require 'gulp-autoprefixer'
gulp.task 'autoprefix', ->
  gulp.src 'input/*.css'
    .pipe autoprefix
      browsers: ['> 1%', 'last 2 versions']
    .pipe gulp.dest 'output/'


# images optimization
imagemin = require 'gulp-imagemin'
jpegtran = require 'imagemin-jpegtran'
gulp.task 'imagemin', ->
  gulp.src 'input/*.jpg'
    .pipe imagemin
      progressive: true
      use: [jpegtran()]
    .pipe gulp.dest 'output/'


# image resize
imageResize = require 'gulp-image-resize'
gulp.task 'image-resize', ->
  gulp.src 'input/*.jpg'
    .pipe imageResize
      width: 200
    .pipe gulp.dest 'output/'
