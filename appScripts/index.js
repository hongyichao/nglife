
var app = angular.module("myApp", ['ngRoute', 'ngGrid', 'Grid1Module', 'Grid2Module']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/',{
	    templateUrl: 'templates/grid1.html',
	    controller: 'grid1Ctrl'
	}).when('/grid2', {
	    templateUrl: 'templates/grid2.html',
	    controller: 'grid2Ctrl'
	}).when('/edit',{
		templateUrl:'edit.html',
		controller:'editCtrl'
	});
}]);

app.controller("listCtrl",function($scope){
	$scope.msg = "This is the page to list.......";
});

app.controller("addCtrl",function($scope){
	$scope.msg = "This is the page to add........";
});

app.controller("editCtrl",function($scope){
	$scope.msg = "This is the page to edit.......";
});