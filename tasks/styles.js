module.exports = (gulp, plugins, config) => {
  gulp.task('styles', () => {
    gulp
      .src([config.paths.styles, '!**/_*.*'])
      .pipe(plugins.sourcemaps.init())
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(plugins.sass.sync())
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(plugins.sourcemaps.write('./maps'))
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(gulp.dest('./dist'))
      .pipe(plugins.browserSync.stream())
  })
}
