'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import cssnano from 'cssnano';


const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('css', () => {
  const plugins = [
    autoprefixer,
    precss,
    cssnano
  ]
  const options = {
    basedir: 'src/assets/stylesheets/'
  };
  return gulp.src([
    './src/assets/stylesheets/style.css'
  ])
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.sourcemaps.init())
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});
