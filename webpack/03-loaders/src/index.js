// JS
var aaa = require('./aaa');
console.log('aaa', aaa)


// Jade
var my_article = require('./article.jade');
var article_elm = document.body.appendChild(document.createElement('div'));
article_elm.innerHTML = my_article();


// CSS
require('./style.css');


// files
var icon = require('./icon.png');
var illustration = require('./illustration.png');

var icon_elm = document.body.appendChild(document.createElement('img'));
icon_elm.src = icon;

var illustration_elm = document.body.appendChild(document.createElement('img'));
illustration_elm.src = illustration;


console.log('icon', icon);
console.log('illustration', illustration);
