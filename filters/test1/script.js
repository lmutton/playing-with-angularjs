var myApp = angular.module('root', []);

myApp.filter('greet', function(){
  return function(name){
      return 'Hello, ' + name + '!';
  };
});
