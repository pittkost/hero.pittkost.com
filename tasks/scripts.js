module.exports = (gulp, plugins, config) => {
  gulp.task('scripts',() => {
    gulp
      .src([config.paths.scripts, '!_*'])
      .pipe(plugins.babel({ presets: ['es2015'] }))
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(plugins.browserify())
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(gulp.dest('./dist'))
      .pipe(plugins.browserSync.stream())
  })
}
