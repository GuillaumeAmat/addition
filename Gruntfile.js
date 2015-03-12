
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');



	grunt.initConfig({

		clean: {

			build: [

				'dist/bower_components',
				'dist/templates',
			]
		},

		copy: {

			requirejs: {

				src: 'www/bower_components/requirejs/require.js',
				dest: 'www/js/require.js'
			},
		},

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

		requirejs: {

			compile: {

				options: {

					appDir: 'www',
					baseUrl: 'js',
					dir: 'dist',
					modules: [{ 'name': 'app' }],
					mainConfigFile: 'www/js/config.js',
					findNestedDependencies: true,
					removeCombined: true,
					logLevel: 1,
				}
			}
		},

		watch: {

			copy_require_js: {

				files: [

					'www/bower_components/requirejs/require.js'
				],
				tasks: ['copy:requirejs']
			},
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
		'jst',
		'copy:requirejs',
	]);

	grunt.registerTask('build', [

		'default',
		'requirejs',
		'clean:build',
	]);
};
