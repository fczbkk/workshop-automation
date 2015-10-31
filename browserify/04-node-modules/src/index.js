// core NodeJS module
var querystring = require('querystring');

var params = {
  aaa: 'bbb',
  ccc: 'ddd'
};

console.log('querystring', querystring.stringify(params));


// module from NPM
var async = require('async');

async.parallel(
  {
    one: function(callback){
      setTimeout(function(){
        callback(null, 1);
      }, 200);
    },
    two: function(callback){
      setTimeout(function(){
        callback(null, 2);
      }, 100);
    }
  },
  function(err, results) {
    console.log('async', results)
  }
);
