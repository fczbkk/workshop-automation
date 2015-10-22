module.exports = function (grunt) {

  grunt.initConfig({

    imagemin: {
      default: {
        files: [{
          expand: true,
          cwd: 'source/',
          src: ['*.{jpg,png,gif}'],
          dest: 'build/'
        }]
      }
    },

    svgmin: {
      default: {
        files: [{
          expand: true,
          cwd: 'source/',
          src: ['*.svg'],
          dest: 'build/',
          ext: '.min.svg'
        }]
      }
    },

    svg2png: {
      default: {
        files: [
          {
            src: 'source/*.svg',
            dest: 'build/'
          }
        ]
      }
    },

    sprite: {
      default: {
        src: 'source/icons/*.png',
        destImg: 'build/sprites.png',
        destCSS: 'build/sprites.css'
      }
    },

    responsive_images: {
      myTask: {
        options: {
          sizes: [
            {width: 320},
            {width: 640},
            {width: 1024}
          ]
        },
        files: [{
          expand: true,
          src: ['**.jpg'],
          cwd: 'source/',
          dest: 'build/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svg2png');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-responsive-images');

};
