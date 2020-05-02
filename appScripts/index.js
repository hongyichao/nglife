
var app = angular.module("myApp", ['ngRoute', 'ngGrid', 'ui.bootstrap',
    'Grid1Module', 'Grid2Module', 'dtModule']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/',{
	    templateUrl: 'templates/grid1.html',
	    controller: 'grid1Ctrl'
	}).when('/grid2', {
	    templateUrl: 'templates/grid2.html',
	    controller: 'grid2Ctrl'
	}).when('/myDT',{
	    templateUrl: 'templates/myDT.html',
	    controller: 'dtCtrl'
	});
}]);
