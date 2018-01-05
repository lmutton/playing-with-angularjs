var myApp = angular.module('root', []);

myApp.controller('PersonCtrl', function(){
  this.friends = [{
    name: 'Harry'
  },{
    name: 'Leeloo'
  },{
    name: 'Raffe'
  },{
    name: 'Maggie'
  },{
    name: 'Lorna'
  },{
    name: 'Chris'
  }];
});

myApp.filter('filterNames', function(){
  return function(names, letter){
    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for(var i = 0; i < names.length; i++){
      if(letterMatch.test(names[i].name.substring(0, 1))){
        filtered.push(names[i]);
      }
    }
    return filtered;
  };
});
