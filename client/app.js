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


app.controller('navCtrl', function(nav) {

	
});




// app.directive('navDir', function () {

// 	return {
// 		restrict : 'E',
// 		controller : 'navCtrl',
// 		templateUrl : 'templates/icon.html'
// 	};
// });


