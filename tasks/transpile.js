var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var combiner = require('stream-combiner2');

module.exports = function (gulp, entries, outputDir, isDevelopment, outputFile) {
  return function () {

    if(typeof outputFile === "undefined") {
      outputFile = 'app.js';
    }

    // set up the browserify instance on a task basis
    var b = browserify({
      entries: entries,
      debug: isDevelopment,
      transform: [babelify]
    });

    var combined = combiner.obj([
      b.bundle(),
      source(outputFile),
      buffer(),
      gulpif(isDevelopment, sourcemaps.init({loadMaps: true})),
      gulpif(!isDevelopment, uglify()),
      gulpif(isDevelopment, sourcemaps.write('.')),
      gulp.dest(outputDir),
    ]);

    combined.on('error', console.error.bind(console));

    return combined;
  };
};
