var gulp        = require('gulp');
var gutil       = require('gulp-util');
var gulpopen    = require('gulp-open');
var path        = require('path');
var configs      = gulp_require('config');

gulp.task('open:assets', function () {
  var folder = './' + path.join(configs.dirs.dist)
  return gulp.src('')
    .pipe(gulpopen({ uri: folder, a: "Finder" }))
});
