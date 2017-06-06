const gulp = require('gulp')

gulp.task('copy', () => {
  return gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist'));
});
