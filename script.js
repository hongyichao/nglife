var app = angular.module("myApp",['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'list.html',
		controller:'listCtrl'
	}).when('/add',{
		templateUrl:'add.html',
		controller:'addCtrl'
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