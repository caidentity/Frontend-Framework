var gulp       = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var minify     = require('gulp-minify-css');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var rename     = require('gulp-rename');
var imagemin   = require('gulp-imagemin');

gulp.task('default', ['styles', 'pages','styles-scss', 'pages-scss','watch']);

gulp.task('styles', function() {
	return gulp.src('./assets/stylesheets/kit.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
  .pipe(sourcemaps.write())
	.pipe(gulp.dest('./assets/stylesheets/dest'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minify())
  .pipe(gulp.dest('./assets/stylesheets/dest'));
});

gulp.task('pages', function() {
	return gulp.src('./assets/stylesheets/pages.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
  .pipe(sourcemaps.write())
	.pipe(gulp.dest('./assets/stylesheets/dest'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minify())
  .pipe(gulp.dest('./assets/stylesheets/dest'));
});

gulp.task('styles-scss', function() {
	return gulp.src('./assets/stylesheets/kit.scss')
	.pipe(sass())
	.pipe(gulp.dest('./assets/stylesheets/dest'));
});

gulp.task('pages-scss', function() {
  return gulp.src('./assets/stylesheets/pages.scss')
  .pipe(sass())
  .pipe(gulp.dest('./assets/stylesheets/dest'));
});

gulp.task('watch', function() {
	gulp.watch('./assets/stylesheets/*.scss', ['styles-scss','pages-scss']);
	gulp.watch('./assets/stylesheets/**/*.scss', ['styles','pages']);
});
