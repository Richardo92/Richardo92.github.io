(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.response = "Please enter data first"; 
  $scope.Color = false;
  $scope.check = function () {
    var input = $scope.name;
    if (input == undefined) {
      $scope.response = "Please enter data first"; 
      return;
    }
    input = input.split(",");
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].length > 0) {
        counter++;
      }
    }
    if (counter === 0) {
      $scope.response = "Please enter data first"; 
      $scope.Color = false;
    }
    else if (counter <= 3) {
      $scope.response = "Enjoy!";
      $scope.Color = true;
    }
    else {
      $scope.response = "Too Much!";
      $scope.Color = true;
    }
  }
}

})();
