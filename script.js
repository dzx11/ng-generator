// Declare the main module
var myApp = angular.module('myApp', []);

myApp.service('sharedModels', ['modelGenerator', function (modelGenerator) {


    var service = modelGenerator('meat');
    return service;

}]);

myApp.service('sharedModels2', ['modelGenerator', function (modelGenerator) {


    var service = modelGenerator();
    return service;

}]);


myApp.factory('modelGenerator', [function () {


    return function (data) {
        var service = {};
        service.data = {
            breakfast: data || 'eggs'
        };
        return service;
    }

}]);


myApp.controller('Ctrl1', ['$scope', 'sharedModels', function($scope, sharedModels) {
    
    $scope.myBreakfast = sharedModels.data;
}]);

myApp.controller('Ctrl2', ['$scope', 'sharedModels2', function($scope, sharedModels2) {
    
    $scope.yourBreakfast = sharedModels2.data;
}]);
