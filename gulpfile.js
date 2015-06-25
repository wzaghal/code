var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var browserSync = require('browser-sync').create();
var webpack = require('gulp-webpack');

var paths = {
  app: ['src/**/*.js'],
  sass: ['./scss/**/*.scss'],
  css: ['./.tmp/css/'],
  html: ['src/**/*.html']
};

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/",
            routes: {
              '/bower_components': 'bower_components',
              '/.tmp': '.tmp'
            }
        }
    });
});

gulp.task('default', ['browser-sync']);

gulp.task('build',function() {
  return gulp
    .src('client/app/app.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('src'));

});
