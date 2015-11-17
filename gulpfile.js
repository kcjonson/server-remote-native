var gulp = require('gulp');
var del = require('del');

gulp.task('default', ['install'])

gulp.task('install', function(){
	return gulp.src('../server-remote-web/lib**/*')
		.pipe(gulp.dest('www')
})

gulp.task('clean', function(){
	del(['www/**/*']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	});
})