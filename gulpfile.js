var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/scss/main.scss')
    .pipe(sass({includePaths: ['./node_modules']}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*', ['sass']);
});
