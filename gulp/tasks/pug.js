'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('pug', () => {
  const options = {
    basedir: 'src/pug/'
  };
  return gulp.src([
    './src/pug/*.pug',
    './src/pug/**/*.pug',
    '!./src/pug/**/_*.pug'
  ])
/*
    .pipe($.changed('./dist/', {
      extension: '.html',
    }))
*/
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});
