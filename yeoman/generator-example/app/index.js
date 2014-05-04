'use strict';
var util = require('util');
var path = require('path');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');

var ExampleGenerator = module.exports = function Examplegenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.options = options;

  this.pkg = JSON.parse(this.readFileAsString(
    path.join(__dirname, '../package.json')
  ));
};

util.inherits(ExampleGenerator, yeoman.generators.Base);

ExampleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      name: 'project_name',
      message: 'What do you want to call this project?',
      default: 'My testing project'
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'Choose one of these:',
      choices: [{
        name: 'First option',
        value: 'first_option',
        checked: true
      },{
        name: 'Second option',
        value: 'second_option',
        checked: false
      }]
    }
  ];

  this.prompt(prompts, function (answers) {

    function yesOrNo(option) {
      return answers.features.indexOf(option) > -1 ? 'YES' : 'NO'
    }

    console.log('You have selected first option: ' + yesOrNo('first_option'));
    console.log('You have selected second option: ' + yesOrNo('second_option'));

    this.projectName = answers.project_name;

    cb();

  }.bind(this));
};

ExampleGenerator.prototype.packageFile = function packageFile() {
  this.template('_package.json', 'package.json');
};

ExampleGenerator.prototype.bowerFile = function bowerFile() {
  this.template('_bower.json', 'bower.json');
};

ExampleGenerator.prototype.appDirectory = function appDirectory() {
  this.mkdir('app');
};

ExampleGenerator.prototype.sampleFile = function sampleFile() {
  this.template('index.html', 'app/index.html');
};

ExampleGenerator.prototype.install = function () {
  var done = this.async();
  this.installDependencies({
    callback: done
  });
};
