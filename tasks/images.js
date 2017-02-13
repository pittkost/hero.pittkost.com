module.exports = (gulp, plugins, config) => {
  gulp.task('images', () => {
    gulp
      .src(config.paths.images)
      .pipe(plugins.imageResize({
        width : 1000,
        height : 1000,
        upscale : false
      }))
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(plugins.imagemin())
      .on('error', plugins.notify.onError("<%= error.message %>"))
      .pipe(gulp.dest('dist'))
      .pipe(plugins.browserSync.stream())
  })
}
