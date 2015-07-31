module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [

          // Foundation core
          'bower_components/foundation/js/foundation/foundation.js',

          // Pick the componenets you need in your project
          //'bower_components/foundation/js/foundation/foundation.abide.js',
          //'bower_components/foundation/js/foundation/foundation.accordion.js',
          //'bower_components/foundation/js/foundation/foundation.alert.js',
          //'bower_components/foundation/js/foundation/foundation.clearing.js',
          //'bower_components/foundation/js/foundation/foundation.dropdown.js',
          //'bower_components/foundation/js/foundation/foundation.equalizer.js',
          //'bower_components/foundation/js/foundation/foundation.interchange.js',
          //'bower_components/foundation/js/foundation/foundation.joyride.js',
          //'bower_components/foundation/js/foundation/foundation.magellan.js',
          //'bower_components/foundation/js/foundation/foundation.offcanvas.js',
          //'bower_components/foundation/js/foundation/foundation.orbit.js',
          //'bower_components/foundation/js/foundation/foundation.reveal.js',
          //'bower_components/foundation/js/foundation/foundation.slider.js',
          //'bower_components/foundation/js/foundation/foundation.tab.js',
          //'bower_components/foundation/js/foundation/foundation.tooltip.js',
          //'bower_components/foundation/js/foundation/foundation.topbar.js',

          // app.js is included with foundation install and fires $(document).foundation();
          'js/app.js',
          
          // Include your own custom scripts (located in the custom folder)
          'js/custom/*.js'

          ],
          // Finally, concatinate all the files above into one single file
          dest: 'js/app-compiled.js',
        },
    },

    uglify: {
      dist: {
        files: {
          // Shrink the file size by removing spaces
          'js/app-compiled.js': ['js/app-compiled.js']
        }
      }
    },
    
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      
      js: {
          files: 'js/custom/**/*.js',
          tasks: ['concat', 'uglify']
      }      
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');  

  grunt.registerTask('build', ['sass', 'concat', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
}
