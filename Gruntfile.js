module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                  expand: true,
                  cwd: 'src/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'dist/css',
                  ext: '.min.css'
                }]
            }
        },
        concat: {
            dist: {
               src: ['src/js/jquery.min.js', 'src/js/bootstrap.min.js', 'src/js/Imager.min.js', 'src/js/javascript.js'],
               dest: 'dist/js/all.min.js'
            },
        },
        responsive_images: {
            options: {
                sizes: [{
                        name: 'small',
                        width: 320,
                        quality: 90
                    },
                    {
                        name: 'medium',
                        width: 640,
                        quality: 90
                    },
                    {
                        name: "large",
                        width: 1024,
                        quality: 90
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
                    "cssmin"
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