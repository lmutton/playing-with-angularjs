var myApp = angular.module('root', []);

myApp.controller('PersonCtrl', function(){
  this.friends = [{
      name: 'Harry',
      type: 'Animal'
    }, {
      name: 'Leeloo',
      type: 'Animal'
    }, {
      name: 'Lorna',
      type: 'Human'
    }, {
      name: 'Raffe',
      type: 'Human'
    }, {
      name: 'Maggie',
      type: 'Human'
    }];
});
//create a filter to filter out the animals
myApp.filter('anAnimal', function(){
  return function(items) {
    //empty array for items that have a type of animal
    var filtered = [];
    //loop over each item in the object
    for (var i = 0; i < items.length; i++){
      //if an items type is === to animal then push into filtered
      if (items[i].type === 'Animal'){
        filtered.push(items[i]);
      }
    }
    //return the final filtered variable
    return filtered;
  };
});

myApp.filter('aHuman', function(){
  return function(items) {
    var filtered = [];
    for(var i = 0; i < items.length; i++){
      if(items[i].type === 'Human'){
        filtered.push(items[i]);
      }
    }
    return filtered;
  };
});
