const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile sass into CSS & auto-inject into browsers
function style() {
  // where is my scss file
  return (
    gulp
      .src('./src/sass/*.scss')
      // Pass that file through sass compiler
      .pipe(sass())
      // Where do I save Compiled CSS
      .pipe(gulp.dest('./src/css'))
      // Stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/sass/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./src/css/*.css').on('change', browserSync.reload); // when CSS changes
  // gulp.watch('./js/*.js').on('change', browserSync.reload); // when JavaScript changes
}

exports.style = style;
exports.watch = watch;

// $gulp style - compilina
// $gulp watch - serveris
