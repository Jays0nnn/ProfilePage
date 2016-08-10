angular.module('myApp')

.service('nav', function () {

	var obj = this;

	obj.navigations = {

		
		key1 :'WORK',
		key2 :'BLOG',
		key3 : 'ABOUT'
		
	};

	obj.strings = {

		key1 : 'Front End Developer, Graphic Designer, Foodie, & Exercise Fanatic',
		key2 : 'Suh dude! Im Van Jayson Pelayo, a self taught developer & junior graphic designer with two years of design work experience. I\'m currently an Developer intern at Metro Click, while taking on freelance graphic design projects on the side. I\'m currently based in Connecticut.',
		title : 'RECENT PROJECTS'
	};

});