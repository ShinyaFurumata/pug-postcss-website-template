'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import pck from '../../package.json';

const reload = browserSync.reload;
const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('serve', () => {
  browserSync({
    notify: true,
    logPrefix: pck.name,
    server: 'dist',
    port: 8000,
    reloadDelay: 800
  });

  gulp.watch(['src/pug/**/*.pug', 'src/pug/*.pug'], ['pug']);
  gulp.watch([
    'src/assets/stylesheets/*.css',
    'src/assets/stylesheets/**/*.css'
  ], ['css']);
  gulp.watch(['src/assets/javascripts/*.js'], ['js', reload]);
  gulp.watch(['src/assets/images/*'], ['imageOptimize', reload]);

});
