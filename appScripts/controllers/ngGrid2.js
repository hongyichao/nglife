var grid2Module = angular.module("Grid2Module", []);

grid2Module.controller("grid2Ctrl", ["$scope", function ($scope) {

    $scope.toDoItems = [
    { "projectName": "My Angular Project 1", taskDesc: "to do 1", hours: "3", start: "2014-11-12", end: "2015-01-15" },
    { projectName: "My Angular Project 2", taskDesc: "to do 2", hours: "3", start: "2014-11-13", end: "2015-02-15" },
    { projectName: "My Angular Project 3", taskDesc: "to do 3", hours: "5", start: "2014-11-14", end: "2015-03-15" },
    { projectName: "My Angular Project 4", taskDesc: "to do 4", hours: "3", start: "2014-11-15", end: "2015-10-15" },
    { projectName: "My Angular Project 5", taskDesc: "to do 5", hours: "6", start: "2014-11-16", end: "2015-10-15" },
    { projectName: "My Angular Project 6", taskDesc: "to do 6", hours: "3", start: "2014-11-17", end: "2015-04-15" },
    { projectName: "My Angular Project 7", taskDesc: "to do 7", hours: "3", start: "2014-11-18", end: "2015-10-15" },
    { projectName: "My Angular Project 8", taskDesc: "to do 8", hours: "3", start: "2014-11-19", end: "2015-05-15" },
    { projectName: "My Angular Project 9", taskDesc: "to do 9", hours: "7", start: "2014-11-20", end: "2015-10-15" },
    { projectName: "My Angular Project 1", taskDesc: "to do 10", hours: "1", start: "2014-11-21", end: "2015-10-15" },
    { projectName: "My Angular Project 2", taskDesc: "to do 11", hours: "3", start: "2014-11-22", end: "2015-10-15" },
    { projectName: "My Angular Project 3", taskDesc: "to do 12", hours: "3", start: "2014-11-23", end: "2015-06-15" },
    { projectName: "My Angular Project 4", taskDesc: "to do 13", hours: "2", start: "2014-11-24", end: "2015-12-15" },
    { projectName: "My Angular Project 5", taskDesc: "to do 14", hours: "3", start: "2014-11-25", end: "2015-10-15" },
    { projectName: "My Angular Project 6", taskDesc: "to do 15", hours: "3", start: "2014-11-26", end: "2015-07-15" },
    { projectName: "My Angular Project 7", taskDesc: "to do 16", hours: "9", start: "2014-11-27", end: "2015-10-15" },
    { projectName: "My Angular Project 8", taskDesc: "to do 17", hours: "3", start: "2014-11-28", end: "2015-10-15" },
    { projectName: "My Angular Project 9", taskDesc: "to do 18", hours: "3", start: "2014-11-29", end: "2015-08-15" },
    { projectName: "My Angular Project 10", taskDesc: "to do 19", hours: "4", start: "2014-11-3", end: "2015-10-15" },
    { projectName: "My Angular Project 10", taskDesc: "to do 20", hours: "5", start: "2014-11-1", end: "2015-09-15" },
    { projectName: "My Angular Project 13", taskDesc: "to do 21", hours: "1", start: "2014-11-2", end: "2015-10-15" },
    { projectName: "My Angular Project 14", taskDesc: "to do 21", hours: "1", start: "2014-11-2", end: "2015-10-15" },
    { projectName: "My Angular Project 10", taskDesc: "to do 19", hours: "4", start: "2014-11-3", end: "2015-10-15" },
    { projectName: "My Angular Project 10", taskDesc: "to do 20", hours: "5", start: "2014-11-1", end: "2015-09-15" },
    { projectName: "My Angular Project 13", taskDesc: "to do 21", hours: "1", start: "2014-11-2", end: "2015-10-15" },
    { projectName: "My Angular Project 14", taskDesc: "to do 21", hours: "1", start: "2014-11-2", end: "2015-10-15" }
    ];


    $scope.selectedItems = [{}];
    $scope.myData = [];
    $scope.totalItems = $scope.toDoItems.length;
    $scope.pagingOptions = { pageSizes: [10, 20, 30], pageSize: 10, currentPage: 1 };
    $scope.filterOptions = { filterText: "", useExternalFilter: false };

    $scope.grid2Options = {
        data: 'myData',
        selectedItems: $scope.selectedItems,
        enableRowSelection: true,
        multiSelect: false,
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions,
        columnDefs: [
            { displayName: "Project Name", field: "projectName" },
            { displayName: "Task Description", field: "taskDesc" },
            { cellTemplate: "<button data-ng-click='showTask(row)'>Click Me</button>", field: null }
        ],
        plugins: [new ngGridFlexibleHeightPlugin()]
    };

    $scope.showTask = function (row) {
        alert('You have selected : '+row.entity.projectName);
    };

    $scope.populateGridItems = function (pageSize, page) {
        console.log(pageSize + "|" + page);
        $scope.myData = $scope.toDoItems.slice((page - 1) * pageSize, page * pageSize);
        $scope.totalItems = $scope.toDoItems.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };

    $scope.populateGridItems($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function (oldVal, newVal) {
        if (oldVal != newVal && oldVal.pageSize != newVal.pageSize) {
            $scope.pagingOptions.currentPage = 1;
            $scope.populateGridItems($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
        }
        else if (oldVal != newVal && oldVal.currentPage != newVal.currentPage) {
            $scope.populateGridItems($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
        }
    }, true);


    $scope.currentItem = {};
    $scope.$watchCollection('selectedItems', function (oldVal, newVal) {
        if (oldVal != newVal) {
            $scope.currentItem = $scope.selectedItems[0];
        }
    });

}]);
