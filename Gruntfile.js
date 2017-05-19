module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            library_files: {
                src: ['public_html/bower_components/angular/angular.min.js',
                    'public_html/bower_components/angular-route/angular-route.min.js',
                    'public_html/bower_components/jquery/dist/jquery.min.js',
                    'public_html/bower_components/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'pre-dist/libraries.js'
            },
            application_files: {
                src: ['public_html/js/app.js',
                    'public_html/js/WeatherService.js',
                    'public_html/js/Controller.js',
                    'public_html/js/config.js'
                ],
                dest: 'pre-dist/appLib.js'
            }, library_css: {
                src: ['public_html/bower_components/bootstrap/dist/css/bootstrap.min.css'],
                dest: 'pre-dist/libraries.css'
            }, app_css: {
                src: ['public_html/css/mycss.css'],
                dest: 'pre-dist/appLib.css'
            }
        },
        uglify: {
            library_build: {
                files: {
                    'public_html/dist/libraries.min.js': ['pre-dist/libraries.js']
                }
            },
            application_build: {
                files: {
                    'public_html/dist/appLib.min.js': ['pre-dist/appLib.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public_html/dist/libraries.min.css': ['pre-dist/libraries.css'],
                    'public_html/dist/appLib.min.css': ['pre-dist/appLib.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};