var dt = angular.module('dtModule', []);

dt.controller('dtCtrl', ['$scope', function($scope) {
    $scope.myDT = new Date();
    
}]);