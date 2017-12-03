var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');

var config = {
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function(){
          return function(sprite, render){

          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/template/template.css'
        }
      }
    }
  }
}

gulp.task('createSprite', function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
             .pipe(svgSprite(config))
             .pipe(gulp.dest('./app/temp/images/'));
});

gulp.task('copySprite', ['createSprite'], function(){
  return gulp.src('./app/temp/images/css/*.css')
             .pipe(rename({prefix: '_'}))
             .pipe(gulp.dest('./app/assets/styles/modules'));
})

gulp.task('icons', ['createSprite', 'copySprite']);
