var Person = (function() {

  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function() {
    return console.log("Hello " + this.name + "!");
  };

  return Person;

})();


module.exports = Person;
