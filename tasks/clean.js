module.exports = (gulp, plugins) => {
  gulp.task('clean', () => {
    plugins.del.sync('dist/**/*')
    console.log('\n[OK] /dist has been removed\n');
  })
}
