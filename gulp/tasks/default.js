'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', (cb) => {
  runSequence(['css', 'pug' , 'imageOptimize' , 'bower' ], 'js', 'serve', cb)
});
