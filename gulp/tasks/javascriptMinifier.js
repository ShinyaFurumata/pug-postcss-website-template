'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import bower from 'main-bower-files';

const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('bower', () => {
  const jsDir = './src/assets/javascripts/',
      jsFilter = $.filter('**/*.js', {restore: true});
  return gulp.src( bower({
      paths: {
        bowerJson: 'bower.json'
      }
    }) )
    .pipe( jsFilter )
    .pipe( $.concat('bundle.js') )
    .pipe( gulp.dest(jsDir) )
    .pipe( jsFilter.restore );
});

gulp.task('js', () => {
  return gulp.src([
    'src/assets/javascripts/*.js'
  ])
  .pipe($.plumber())
  .pipe($.concat('script.js'))
  .pipe($.uglify())
  .pipe($.rename({
    extname: '.min.js'
  }))
  .pipe(gulp.dest("./dist/js/"));
});
