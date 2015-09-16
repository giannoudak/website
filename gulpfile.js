var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

// define default task
// do not forget to pass the webpack options -either from webpack.config.js or new
gulp.task('default', function() {
  return gulp.src('src/main.js')
    //.pipe(webpack(webpackConfig))
    .pipe(webpack({
      config:webpackConfig
    }, null, function(err, stats){
      console.log(stats);
    }))
    .pipe(gulp.dest('dist/'));
});