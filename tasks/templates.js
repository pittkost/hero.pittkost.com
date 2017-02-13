var twig = require('gulp-twig')
var useref = require('gulp-useref')

module.exports = (gulp, plugins, config) => {
  gulp.task('templates', () => {
    gulp
      .src([config.paths.templates, '!**/_*.*'])
      .pipe(twig())
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(useref())
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(gulp.dest('dist'))
      .pipe(plugins.browserSync.stream())
  })
}
