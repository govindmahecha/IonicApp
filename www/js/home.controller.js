angular.module('starter')
    .controller('homeController',['$scope','UserService',function($scope,UserService){
        $scope.user = UserService.getUser();
        $scope.loggedInBy = UserService.getLoggedIn();
    }]);