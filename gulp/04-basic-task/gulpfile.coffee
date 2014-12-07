gulp = require 'gulp'

# zakladny task
gulp.task 'basic', ->
  console.log 'Toto je task.'


# gulp-src (minimatch)
gulp.task 'src', ->
  result = gulp.src 'input/*'
  console.log 'src', result


# gulp-dest (vinyl)
gulp.task 'dest', ->
  gulp.src 'input/*'
    .pipe gulp.dest 'output'


# gulp-watch
gulp.task 'watch', ->
  gulp.watch 'input/*', (event) ->
    console.log 'event', event.type, event.path


# watch and call task
gulp.task 'watch2', ->
  gulp.watch 'input/*', ['basic']


# chaining and dependencies

gulp.task 'aaa', ->
  console.log 'aaa'

gulp.task 'bbb', ['aaa'], ->
  console.log 'bbb'

gulp.task 'ccc', ['bbb', 'aaa'], ->
  console.log 'ccc'
