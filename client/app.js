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
	.state('blog', {
		url: '/blog',
		templateUrl: 'templates/blog.html'
	});

});


app.controller('navCtrl' , function() {

	var obj = this;

	obj.navigations = {

		
		key1 :'WORK',
		key2 :'BLOG',
		key3 : 'ABOUT'
		
	};


});

app.controller('mainCtrl', function() {


	var obj = this;

	obj.strings = {

		key1 : 'Developer, Graphic Designer, Foodie, & Exercise Fanatic',
		key2 : 'Suh dude! Im Van Jayson Pelayo, a self taught developer & junior graphic designer with two years of design work experience. I\'m currently an Developer intern at Metro Click, while taking on freelance graphic design projects on the side. I\'m currently based in Connecticut.',
		title : 'RECENT PROJECTS'
	};
});


app.directive('navDir', function () {

	return {
		restrict : 'E',
		controller : 'navCtrl',
		templateUrl : 'templates/icon.html'
	};
});

app.controller('imgCtrl', function() {

	var obj = this;

	obj.imgs = {

		img1 : 'one',
		img2 : 'two',
		img3 : 'three',
		img4 : 'four',
		img5 : 'five',
		img6 : 'six',
		img7 : 'seven',
		img8 : 'eight',
		img9 : 'nine'

	};
});
