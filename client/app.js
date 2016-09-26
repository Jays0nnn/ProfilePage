var app = angular.module('myApp', ['ngMaterial', 'ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

	.state('home', {
		url : '/home',
		templateUrl: 'templates/about.html'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'templates/content.html'
	})
	.state('resume',{
		url: '/resume',
		templateUrl: 'templates/head.html'
	});

	$urlRouterProvider.when('','/home');

});


app.directive('headDir', function() {

	return {

		restrict: 'E',
		templateUrl: 'templates/head.html'

		}
	});

app.directive('contDir', function() {

	return {

		restrict: 'E',
		templateUrl: 'templates/content.html',
		// link: function(scope,elem,attr){
		// 	elem.bind('click', function(){
		// 		console.log('sofarsogood');
		// 		$(this).replaceWith('.test');
		// 		$(".home").addClass("test");
		// 		$(".home").click(function(){
		// 			elem.bind('click', function(){
		// 				console.log('thisworks!');
		// 			})
		// 			$('.about').slideUp('moderate');

		// 		});
		// 	});
		// }
	};
});

app.directive('pro1', function(){
	return {

		restrict: 'E',
		templateUrl: "templates/pro1.html",
		link: function(scope,elem,attr){
			elem.bind('click', function(){
				console.log('sofarsogood');
			});

		}
	};

});

app.directive('pro2', function(){
	return {

		restrict: 'E',
		templateUrl: "templates/pro2.html",
		link: function(scope,elem,attr){
			elem.bind('click', function(){
				console.log('project2 good!');
			});

		}
	};

});

app.directive('pro3', function(){
	return {

		restrict: 'E',
		templateUrl: "templates/pro3.html",
		link: function(scope,elem,attr){
			elem.bind('click', function(){
				console.log('project3 good!');
			});

		}
	};

});

app.directive('pro4', function(){
	return {

		restrict: 'E',
		templateUrl: "templates/pro4.html",
		link: function(scope,elem,attr){
			elem.bind('click', function(){
				console.log('project4 good!');
			});

		}
	};

});



