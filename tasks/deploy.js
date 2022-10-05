const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

const options = {}

module.exports = function() {
  return gulp.src('dest/**/*')
    .pipe(ghPages(options));
}
