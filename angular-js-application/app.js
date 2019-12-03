'use strict;'
var contactsApp = angular.module("contactsApp", ['ngRoute']);

contactsApp.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider, $log) {

 
  // $log.log("contactsApp Called");
  $locationProvider.hashPrefix('');
    $routeProvider.when('/home', {
      controller: 'homeController as home',
	    templateUrl: 'components/home/home.tpl.html'
   }).when('/contact', {
    controller: 'contactController as c',
    templateUrl: 'components/contact/contact.tpl.html'
  }).   otherwise({
    redirectTo: '/home',
    
    });

	

}]);