module.exports = (gulp, plugins) => {
  gulp.task('gh-pages', () => {
    return gulp
      .src('dist/**/*')
      .pipe(plugins.ghPages({
        force: true
      }))
      .on('error', plugins.notify.onError("<%= error.message %>"));
  })
}
