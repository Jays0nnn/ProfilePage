$(document).ready(function (){

	$('.home').onclick(function(){
		setInterval(function() {
			$('.about .resume .free').slideToggle('fast');
		},
		3000);
	});

	$('.about').onclick(function(){
		setInterval(function() {
			$('.about .resume .free').slideToggle('fast');
		},
		3000);
	});

	$('.resume').onclick(function(){
		setInterval(function () {
			$('.about .resume .free').slideToggle('fast');
		},
		3000);
	});

	$('.free').onclick(function(){
		$('.about .resume .home').slideToggle('fast');
	});

});