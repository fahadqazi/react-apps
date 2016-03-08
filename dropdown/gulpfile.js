var gulp = require('gulp');
var gutil = require('gulp-util'); //logging out input
var source = require('vinyl-source-stream'); //handling text files
var browserify = require('browserify'); //code dependecy
var watchify = require('watchify'); //rerun gulp files whenever code changes
var reacitfy = require('reactify');  //


gulp.task('default',function(){
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reacitfy],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file){
    if(file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build();
  bundler.on('update', build);
});
