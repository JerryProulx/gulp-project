var gulp =  require('gulp'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    path = require('path');
const webpackConfig = require('../../webpack.config.js');

gulp.task('scripts', function(){
  return gulp.src('app/assets/scripts/app.js')
    .pipe(webpackStream(webpackConfig))
    .on('error', function(){
      this.emit('end');
    })
    .pipe(gulp.dest('app/temp/scripts'));
});



// webpack(require('../../webpack.config.js'), function(error, stats){
//   if(error){
//     console.log(error.toString());
//   }
//   console.log(stats.toString());
// });
