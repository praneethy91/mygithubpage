module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        concat: {
            js: {
               src: ['src/js/jquery.min.js', 'src/js/bootstrap.min.js'],
               dest: 'dist/js/all.min.js'
            },
            css: {
               src: ['src/css/bootstrap.css', 'src/css/fonts.css', 'src/css/googlefont.css', 'src/css/styles.css'],
               dest: 'src/css/all.css'
            },
        },
        cssmin: {
            target: {
                files: [{
                  expand: true,
                  cwd: 'src/css',
                  src: ['all.css', '!*.min.css'],
                  dest: 'dist/css',
                  ext: '.min.css'
                }]
            }
        },
        responsive_images: {
            options: {
                sizes: [{
                        name: 'small',
                        width: 320,
                        quality: 80
                    },
                    {
                        name: 'medium',
                        width: 640,
                        quality: 80
                    },
                    {
                        name: "large",
                        width: 1024,
                        quality: 80
                }],
                newFilesOnly: false
            },
            myTask: {
                options: {
                    engine: 'im',
                },
                files: [{
                    expand: true,
                    src: ['*.{jpg,gif,png}'],
                    cwd: 'src/img/',
                    dest: 'dist/img/'
                }]
            }
        },
        watch: {
            css: {
                files: 'src/css/**/*.css',
                tasks: [
                    "concat",
                    "cssmin"
                    ]
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: [
                    "concat"
                    ]
            }
        }
    });

    grunt.registerTask('default', [
        'cssmin',
        'concat',
        'responsive_images',
        'watch'
    ]);
};