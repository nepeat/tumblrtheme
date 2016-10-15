module.exports = function(grunt) {
    
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: "expanded",
                    require: [
                        "sass_tumblr",
                    ],
                    sourcemap: "none"
                },
                files: {
                    "theme/styles.css": "theme/scss/main.scss",
                }
            }
        },
        inline: {
            dist: {
                src: "theme/index.html",
                dest: "theme02.html",
            },
        },
        watch: {
            files: ["theme/**/*.scss", "theme/**/*.html"],
            tasks: ["build"]
        }
    });

    grunt.loadNpmTasks("grunt-inline");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask("build", ["sass", "inline"]);
};
