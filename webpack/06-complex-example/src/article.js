var template = require('./article.jade');
require('./article.less')

module.exports = function (title, content) {

  var element = document.createElement('div');
  element.innerHTML = template();

  element.querySelector('.title').innerHTML = title;
  element.querySelector('.content').innerHTML = content;

  return element;

}
