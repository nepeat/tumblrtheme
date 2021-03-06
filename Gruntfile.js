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
                dest: "dist/theme.html",
            },
        },
        watch: {
            files: ["theme/**/*.scss", "theme/**/*.html", "theme/extra_styles.css"],
            tasks: ["build"]
        }
    });

    grunt.loadNpmTasks("grunt-inline");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask("build", ["sass", "inline"]);
};
