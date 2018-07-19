const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const browsersyncinstance = require('browser-sync').create();
const browsersync = require('browser-sync');

gulp.task('browsersync', () => {
	return browsersyncinstance.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('jsxcompile', () => {
	return gulp.src('*.jsx.js').pipe(babel({
		presets: ["react"]
	})).pipe(rename((path) => {
		path.basename = path.basename.replace('.jsx', '');
	})).pipe(gulp.dest('./'));
	browsersyncinstance.reload({stream: true});	
});

gulp.task('watchjsx', () => {
	gulp.watch('*.jsx.js', ['jsxcompile']);
});

gulp.task('default', ['browsersync', 'watchjsx']);