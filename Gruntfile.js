
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jst');



	grunt.initConfig({

		less: {

			default: {

				files: {

					'www/css/app.css': 'www/css/app.less'
				}
			}
		},

		jst: {

			compile: {

				options: {

					processName: function(filename) {

						return filename.slice('www/templates/'.length, filename.length);
					}
				},
				files: {

					'www/templates/templates.js': ['www/templates/**/*.html']
				}
			}
		},

		watch: {

			css: {

				files: [

					'www/css/**/*.less'
				],
				tasks: ['less:default']
			},
			templates: {

				files: [

					'www/templates/**/*.html'
				],
				tasks: ['jst']
			}
		},
	});



	grunt.registerTask('default', [

		'less:default',
		'jst'
	]);
};
