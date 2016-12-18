var gulp = require('gulp');
var vuemaker = require('gulp-vuemaker');
var sass = require('gulp-sass');

gulp.task('vuemaker', function() {
  return gulp.src('./src/dev/**/*.+(js|html)')
    .pipe(vuemaker())
    .pipe(gulp.dest('./src'));
});

gulp.task('sass', function(){
  return gulp.src('./src/dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'))
});

gulp.task('watch', function(){
  gulp.watch('./src/dev/**/*.+(js|scss|html)', ['vuemaker', 'sass']);
});

gulp.task('default',['vuemaker', 'sass']);
