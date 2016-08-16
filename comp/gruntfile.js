module.exports = function(grunt) {



	grunt.initConfig({

		concat: {
			main_js: {
				src: ['../client/js/app.js'],
				dest: '../client/build/js/main.js'
			}
			// vendors_js: {
			// 	src: ['../client/bower_components/angular/angular.min.js','../client/bower_components/angular-animate/angular-animate.min.js',
			// 		  '../client/bower_components/angular-aria/angular-aria.min.js', '../client/bower_components/angular-material/angular-material.min.js',
			// 		  '../client/bower_components/angular-messages/angular-messages.min.js','../client/bower_components/angular-ui-router/release/angular-ui-router.min.js',
			// 		  '../client/bower_components/jquery/dist/jquery.min.js'],
			// 	dest: '../client/build/js/vendors.js'
			// }
		},
		watch: {
			js: {
			// use only for JavaScript auto concat.
				files: ['../client/js/**/*.js'],
				tasks: ['concat'],
				options: {
					livereload: true,
				}
			}
		}

	});

		// grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-concat');
		// grunt.loadNpmTasks('grunt-contrib-htmlmin');

		grunt.registerTask('default',['concat', 'watch']);
};


