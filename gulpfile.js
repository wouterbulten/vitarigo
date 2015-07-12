var gulp = require('gulp');
var config = require('./build-config');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

//Function passes on all arguments to a separate component
function getTask(task) {
	var argArray = [].slice.call(arguments);
	argArray[0] = gulp; //Replace first element with a gulp reference

	return require('./tasks/' + task).apply(this, argArray);
}

gulp.task('transpile', getTask('transpile',
  config.entryPoint, config.dir.dist, (config.env == 'development')
));

// Main task for serving
gulp.task('serve', ['transpile'], function() {

	gulp.watch(config.watch.scripts, ['transpile', browserSync.reload]);

	browserSync({
		server: './dist'
	});
});
