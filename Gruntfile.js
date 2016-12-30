module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-responsive-images');

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
        watch: {
            css: {
                files: 'src/css/**/*.css',
                tasks: [
                    "cssmin"
                    ]
            }
        },
        responsive_images: {
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
        }
    });

    grunt.registerTask('default', [
        'cssmin',
        'watch',
        'responsive_images'
    ]);
};