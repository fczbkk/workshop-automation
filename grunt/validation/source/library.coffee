class Person

  constructor: (@name) ->

  greet: (greeting = 'Hi.') ->
    console.log "#{greeting} My name is #{@name}."

class Pirate extends Person

  greet: (greeting = 'Arrrrr!') ->
    super()

window.Person = Person
window.Pirate = Pirate
