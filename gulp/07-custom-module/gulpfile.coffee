gulp = require 'gulp'
test = require '../test-gulp-plugin'

gulp.task 'default', ->
  gulp.src 'input/*.txt'
    .pipe test 'xxx'
    .pipe gulp.dest 'output/'
