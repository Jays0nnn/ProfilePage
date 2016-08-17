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


app.directive('headDir', function($parse) {

	function introFunction (scope,elem,attr) {

		// var obj = $parse(attr.headDir);
		// console.log(obj);

		elem.bind('load', function(){
			console.log('woo it works!');
		
		});
	}

	return {

		restrict: 'E',
		templateUrl: 'templates/head.html',
		link: introFunction

	};
});

app.directive('contDir', function() {

	return {

		restrict: 'E',
		templateUrl: 'templates/content.html',
		link: function(scope,elem,attr){
			elem.bind('click', function(){
				console.log('sofarsogood');
				// $(this).replaceWith('.test');
				// $(".home").addClass("test");
				$(".home").click(function(){
					// elem.bind('click', function(){
					// 	console.log('thisworks!');
					// })
					$('.about').slideUp('moderate');

				});
			});
		}
	};
});



