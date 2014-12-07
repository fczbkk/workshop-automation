gulp = require 'gulp'
coffee = require 'gulp-coffee'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'
cache = require 'gulp-cached'
remember = require 'gulp-remember'
concat = require 'gulp-concat'
merge = require 'merge-stream'
streamqueue = require 'streamqueue'
eventStream = require 'event-stream'
consolidate = require 'gulp-consolidate'


# straight pipe, with single input and single output
gulp.task 'straight-pipe', ->
  gulp.src 'input/*.coffee'    # <-- input
    .pipe coffee()
    .pipe uglify()
    .pipe gulp.dest 'output/'  # <-- output


# multiple outputs
gulp.task 'multiple-outputs', ->
  gulp.src 'input/*.coffee'    # <-- single input
    .pipe coffee()
    .pipe gulp.dest 'output/'  # <-- first output
    .pipe uglify()
    .pipe rename
      extname: '.min.js'
    .pipe gulp.dest 'output/'  # <-- second output


# only changed files are processed
gulp.task 'only-changed', ->
  gulp.src 'input/*.coffee'
    .pipe cache 'coffee'
    .pipe coffee()
    .pipe gulp.dest 'output/'

gulp.task 'only-changed-watch', ->
  gulp.watch 'input/*.coffee', ['only-changed']


# process only changed files, then all (incremental rebuild)
gulp.task 'cache-remember', ->
  gulp.src 'input/*.coffee'
    .pipe cache 'coffee'       # <-- only process changed files
    .pipe coffee()
    .pipe uglify()
    .pipe remember 'coffee'    # <-- process all files
    .pipe concat 'scripts.js'
    .pipe gulp.dest 'output/'


# async streams
gulp.task 'merge-stream', ->
  merge (
    gulp.src 'input/library.js'
      .pipe uglify()
      .pipe gulp.dest 'output/'
    gulp.src 'input/*.coffee'
      .pipe coffee()
      .pipe gulp.dest 'output/'
  )


# stream queue
gulp.task 'stream-queue', ->
  streamqueue(
    objectMode: true
    gulp.src 'input/*.coffee'
      .pipe coffee()
    gulp.src 'input/library.js'
      .pipe uglify()
  )
    .pipe concat 'scripts.js'
    .pipe gulp.dest 'output/'


# stream array
gulp.task 'stream-array', ->

  data =
    first:
      firstname: 'Riki'
      lastname: 'Fridrich'
    second:
      firstname: 'John'
      lastname: 'Doe'

  eventStream.concat.apply null,
    for key, val of data
      gulp.src 'input/template.txt'
        .pipe consolidate 'lodash', val
        .pipe rename
          basename: key
          extname: '.txt'
        .pipe gulp.dest 'output/'
