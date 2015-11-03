require(['./article'], function (article) {

  var my_article = article('Article #1', 'This is article #1.');
  document.body.appendChild(my_article);

});
