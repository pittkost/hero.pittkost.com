module.exports = (gulp, plugins, config) => {
  gulp.task('serve', () => {
    plugins.browserSync.init(config.browserSync)
  })
}
