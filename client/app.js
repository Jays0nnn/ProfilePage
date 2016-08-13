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


app.directive('headDir', function() {

	return {

		restrict: 'E',
		templateUrl: 'templates/head.html'

	};
});



app.controller('navCtrl', function(nav) {

	var obj = this;

	obj.strings = {

		key1 : 'Front End Developer, Graphic Designer, Foodie, & Exercise Fanatic',
		key2 : 'Suh dude! Im Van Jayson Pelayo, a self taught developer & junior graphic designer with two years of design work experience. I\'m currently an Developer intern at Metro Click, while taking on freelance graphic design projects on the side. I\'m currently based in Connecticut.',
		title : 'RECENT PROJECTS'
	};

	obj.content = {

		con_1 : 'Shoe Shine',
		con_2 : 'Brick & Ivy'
	};

	
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


