module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/js/*.min.js'],
        dest: 'assets/js/app-bundle.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/theme.min.js': ['assets/js/theme.js'],
          'assets/js/theme.init.min.js': ['assets/js/theme.init.js'],
          'assets/js/validate-forms.min.js': ['assets/js/validate-forms.js']
        }
      }
    },
    shell : {
        jekyllServe : {
            command : 'bundle exec jekyll serve --config _config.yml,_config.dev.yml'
        },

        jekyllBuild : {
            command : 'JEKYLL_ENV=production bundle exec jekyll build'
        }  
    },
    watch: {
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  
  // Register tasks.
  grunt.registerTask('serve', ['uglify', 'concat', 'shell:jekyllServe']);
  grunt.registerTask('default', ['shell:jekyllBuild']);
  grunt.registerTask('dev', ['uglify', 'concat']);

};
