angular.module('starter')
  .config(function($stateProvider,$urlRouterProvider) {
   $stateProvider
   .state('register', { url: '/', templateUrl: 'templates/register.html', controller : 'registerController'})
   .state('home', {url: '/home', templateUrl: 'templates/home.html',controller : 'homeController'});
   
    $urlRouterProvider.otherwise('/');
});