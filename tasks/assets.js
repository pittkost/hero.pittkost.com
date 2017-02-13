module.exports = (gulp, plugins, config) => {
  gulp.task('assets', () => {
    gulp
      .src([config.paths.assets, '!**/_*.*'])
      .pipe(gulp.dest('dist'))
      .pipe(plugins.browserSync.stream())
  })
}
