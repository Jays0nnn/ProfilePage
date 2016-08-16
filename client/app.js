var app = angular.module('myApp', ['ngMaterial', 'ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

	.state('home', {
		url : '/home',
		templateUrl: 'templates/home.html'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html'
	})
	.state('resume',{
		url: '/resume',
		templateUrl: 'templates/resume.html'
	});

});

// app.animation('.home', function(){
// 	return {
// 		enter: function (home , done) {

// 		}

// 	};
// });

app.directive('headDir', function() {

	return {

		restrict: 'E',
		templateUrl: 'templates/head.html'

	};
});

app.directive('contDir', function() {

	return {

		restrict: 'E',
		templateUrl: 'templates/content.html'
	};
});


app.controller('navCtrl', function(nav) {

	var obj = this;

	

	
});





app.service('nav', function () {



});


// app.directive('navDir', function () {

// 	return {
// 		restrict : 'E',
// 		controller : 'navCtrl',
// 		templateUrl : 'templates/icon.html'
// 	};
// });


