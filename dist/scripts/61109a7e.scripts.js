"use strict";angular.module("ikyApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ikyApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["Apples","Bananas","Pears"]}]);