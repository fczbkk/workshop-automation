doSomething = ->
  console.log 'Doing something.'

window.addEventListener 'load', ->
  console.log 'Window is loaded.'
  doSomething()
