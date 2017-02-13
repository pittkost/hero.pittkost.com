var gulp = require('gulp');
var tasks = require('require-dir')('./tasks');
var plugins = require('gulp-load-plugins')({ pattern: '*' })
var config = require('./config.json');

Object.keys(tasks).forEach((task) => {
  tasks[task](gulp, plugins, config)
})

gulp.task('default', [
  'build',
  'watch',  
  'serve'
], function() {
  console.log('\n[OK] Start working on your project\n');
})

gulp.task('build', [
  'assets',
  //'images',
  'scripts',
  'styles',
  'templates'
], function() {
  console.log('\n[OK] New /dist is ready\n');
})

gulp.task('rebuild', [
  'clean',
  'build'
], function() {
  console.log('\n[OK] Rebuilding compleated successfully\n');
})

gulp.task('watch', () => {
  gulp
    .watch(config.paths.assets, ['assets'])

  gulp
    .watch(config.paths.assets, ['images'])
  
  gulp
    .watch(config.paths.scripts, ['scripts'])

  gulp
    .watch(config.paths.styles, ['styles'])

  gulp
    .watch(config.paths.templates, ['templates'])  
})
