'use strict';
var util = require('util');
var path = require('path');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');

var PageGenerator = module.exports = function PageGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.options = options;
};

util.inherits(PageGenerator, yeoman.generators.Base);

PageGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      name: 'page_name',
      message: 'What do you want to call this page?',
      default: 'My testing page'
    }
  ];

  this.prompt(prompts, function (answers) {
    this.pageName = answers.page_name;
    cb();
  }.bind(this));
};

PageGenerator.prototype.pageFile = function pageFile() {
  this.template('index.html', 'app/' + this._.slugify(this.pageName) + '.html');
};
