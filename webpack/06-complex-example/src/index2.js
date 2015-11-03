function insertArticle() {

  require(['./article'], function (article) {

    var my_article = article('Article #2', 'This is article #2.');
    document.body.appendChild(my_article);

  });

}

setTimeout(insertArticle, 3000);
