var gulp = require('gulp');
var vuemaker = require('gulp-vuemaker');

gulp.task('default', function() {
  return gulp.src('./src/dev/**/*.+(js|css|html)')
    .pipe(vuemaker())
    .pipe(gulp.dest('./src'));
});
