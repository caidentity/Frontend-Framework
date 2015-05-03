var gulp       = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var minify     = require('gulp-minify-css');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var rename     = require('gulp-rename');
var imagemin   = require('gulp-imagemin');

// TODO: Deprecate these less tasks.
gulp.task('default', ['styles', 'styles-less', 'watch']);

gulp.task('styles', function() {
	return gulp.src('./assets/stylesheets/kit.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
  .pipe(sourcemaps.write())
	.pipe(gulp.dest('./assets/stylesheets/dest/stylesheets'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minify())
  .pipe(gulp.dest('./assets/stylesheets/dest/stylesheets'));
});

//gulp.task('pages', function() {
//	return gulp.src('./pages/src/stylesheets/pages.scss')
//  .pipe(sourcemaps.init())
//    .pipe(sass({
//      errLogToConsole: true
//    }))
//  .pipe(sourcemaps.write())
//	.pipe(gulp.dest('./pages/dest/stylesheets'))
//  .pipe(rename({suffix: '.min'}))
//  .pipe(minify())
//  .pipe(gulp.dest('./pages/dest/stylesheets'));
//});

// TODO: Deprecate these less tasks.
gulp.task('styles-less', function() {
	return gulp.src('./assets/stylesheets/kit.scss')
	.pipe(sass())
	.pipe(gulp.dest('./assets/stylesheets/dest/kit.css'));
});

// TODO: Deprecate these less tasks.
//gulp.task('pages-less', function() {
//	return gulp.src('./less/kitpages.scss')
//	.pipe(sass())
//	.pipe(gulp.dest('./less/kitpages.css'));
//});

gulp.task('watch', function() {
  // TODO: Deprecate these less tasks.
	gulp.watch('./assets/stylesheets/*.scss', ['styles-less']);
	gulp.watch('./assets/stylesheets/**/*.scss', ['styles']);
});
