/*
Grunt NPM Package List, Do Not Delete
----------------------

https://npmjs.org/package/grunt-contrib-uglify
https://npmjs.org/package/grunt-contrib-sass
https://npmjs.org/package/grunt-datauri
https://npmjs.org/package/grunt-contrib-compress
https://npmjs.org/package/grunt-contrib-csslint
https://npmjs.org/package/grunt-shell
https://npmjs.org/package/grunt-html-validation
https://npmjs.org/package/grunt-ftp-deploy
https://npmjs.org/package/grunt-contrib-jshint
https://npmjs.org/package/grunt-contrib-watch
https://npmjs.org/package/grunt-contrib-clean
https://npmjs.org/package/grunt-contrib-cssmin
https://npmjs.org/package/jpegtran-bin
https://npmjs.org/package/grunt-contrib-imagemin
https://npmjs.org/package/grunt-contrib-htmlmin
https://npmjs.org/package/grunt-autoprefixer

*/

module.exports = function (grunt) {
	//Configurations for each module
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
		
		uglify : {
			options : {
				mangle : true,
				except : ['jQuery']
			},
			my_target : {
				files : {
					'build/_js/all.js' : [
						'source/_js/jquery.js', //jQuery First
						'source/_js/*.js',		//All files except jQuery
						'!source/_js/main.js',	//excep our Main.js file
						'source/_js/main.js'	//Main.js must be last
					]
				}
			}
		},
		
		sass : {
			dist : {
				options : {
					trace : true,
					style : 'expanded', //nested, compact, compressed, expanded
					precision : 10,
					quiet : false,
					debugInfo : false,
					lineNumbers : false
				},
				files : {
					'build/_css/main.css' : 'source/_css/main.scss'
				}
			}
		},
		
		datauri : {
			default: {
				options: {
					classPrefix: 'data-'
				},
				src: ["source/_img/**/*.*"],
				dest: ["source/_css/icons.css"]
			}
		},
		
		compress : {
			main : {
				options : {
					archive : 'archive/archive-<%= grunt.template.today("yyyy-mm-dd") %>.zip'
				},
				files : [
					{src:['source/**']}
				]
			}
		},
		
		csslint : {
			options : {
				absoluteFilePathsForFormatters : true,
				formatters : [{id: 'csslint-xml', dest: 'report/csslint.xml'}]
			},
			strict: {
				options: {
					import: false
				},
				src: ['source/_css/main.css']
			}
		},
		
		shell : {
			options : {
				stdout : true,
				stderr : true
			},
			multiple : {
				command : [
					'git add -A',
					'git commit -m "<%= grunt.template.today("yyyy-mm-dd") %>"',
					'git push origin master'
				].join('&&')
			}
		}
        
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-datauri');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-html-validation');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	
    grunt.registerTask('default', ['uglify']);
};