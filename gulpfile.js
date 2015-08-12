var gulp     = require('gulp'),
  sass       = require('gulp-sass'),
  minify     = require('gulp-minify-css'),
  sourcemaps = require('gulp-sourcemaps')
  concat     = require('gulp-concat'),
  plumber    = require('gulp-plumber'),
  watch      = require('gulp-watch'),
  notify     = require('gulp-notify'),
  lint       = require('gulp-eslint'),
  order      = require('gulp-order'),
  webserver  = require('gulp-webserver'),
  jscs       = require('gulp-jscs');


/**
 * CONFIGS
 */
var _config = {
  "project_name" : "Frontend Framework",
  "project_key"  : "frontend-framework",
  "build_folder" : "build/",
  "demo_folder" :  "demo/"
}

/**
 * @task Compile SASS
 */
gulp.task('compile-fe-css', function(){

  gulp.src('./assets/stylesheets/main.scss')
    .pipe(sass({
          errLogToConsole: true,
          onError: function(err) {
            return notify().write(err);
          }
      }))
    //.pipe(plumber())
    .pipe(concat('build-' + _config.project_key + '.css'))
    .pipe(gulp.dest(_config.build_folder))
    .pipe(notify(_config.project_name + ': SCSS compilation complete.'));

});


/** ---STYLEGUIDE COMPILE CSS ---**/
gulp.task('compile-kit-css', function(){

  gulp.src('./demo/assets/kit.scss')
    .pipe(sass({
          errLogToConsole: true,
          onError: function(err) {
            return notify().write(err);
          }
      }))
    //.pipe(plumber())
    .pipe(concat('/assets/kit.css'))
    .pipe(gulp.dest(_config.demo_folder))
    .pipe(notify(_config.project_name + ': SCSS compilation complete.'));

});






/**
 * Starts the local webserver to view the Style Guide
 */
gulp.task('run-webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      port: 9876,
      fallback: 'index.html',
      livereload: false,
      directoryListing: true,
      open: '/demo/index.html'
    }));
});



// watch
// gulp.task('watch-tests', function() {
//   gulp.watch('test/test_*.js', ['compile-tests']);
// });

// Default task
gulp.task('default', function(){
  gulp.start('compile-fe-css','compile-kit-css');

  // gulp.watch([
  //   'test/**/test_*.js',
  //   'test/**/test_*.coffee'
  // ], ['run-mocha-tests']);

  // gulp.watch([
  //   'app/**/*.js',
  //   'app/**/*.coffee'
  // ], ['compile-fe-js']);

  gulp.watch([
    'stylesheets/**/*.scss',
    'demo/**/**/*.scss',
  ], ['compile-fe-css','compile-kit-css']);

  // gulp.run('run-mocha-tests');
});























// gulp.task('default', ['styles', 'pages','styles-scss', 'pages-scss','watch']);

// gulp.task('styles', function() {
// 	return gulp.src('./assets/stylesheets/kit.scss')
//   .pipe(sourcemaps.init())
//     .pipe(sass({
//       errLogToConsole: true
//     }))
//   .pipe(sourcemaps.write())
// 	.pipe(gulp.dest('./assets/stylesheets/dest'))
//   .pipe(rename({suffix: '.min'}))
//   .pipe(minify())
//   .pipe(gulp.dest('./assets/stylesheets/dest'));
// });

// gulp.task('pages', function() {
// 	return gulp.src('./assets/stylesheets/pages.scss')
//   .pipe(sourcemaps.init())
//     .pipe(sass({
//       errLogToConsole: true
//     }))
//   .pipe(sourcemaps.write())
// 	.pipe(gulp.dest('./assets/stylesheets/dest'))
//   .pipe(rename({suffix: '.min'}))
//   .pipe(minify())
//   .pipe(gulp.dest('./assets/stylesheets/dest'));
// });

// gulp.task('styles-scss', function() {
// 	return gulp.src('./assets/stylesheets/kit.scss')
// 	.pipe(sass())
// 	.pipe(gulp.dest('./assets/stylesheets/dest'));
// });

// gulp.task('pages-scss', function() {
//   return gulp.src('./assets/stylesheets/pages.scss')
//   .pipe(sass())
//   .pipe(gulp.dest('./assets/stylesheets/dest'));
// });

// gulp.task('watch', function() {
// 	gulp.watch('./assets/stylesheets/*.scss', ['styles-scss','pages-scss']);
// 	gulp.watch('./assets/stylesheets/**/*.scss', ['styles','pages']);
// });
