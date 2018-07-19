const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const browsersync = require('browser-sync');
const browsersyncinstance = browsersync.create();
const jsxpath = 'js/*.jsx.js';
const htmlpath = '*.html';

gulp.task('browsersync', () => {
	browsersyncinstance.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('jsx', () => {
	gulp.src(jsxpath).pipe(babel({
		presets: ["react"]
	})).pipe(rename((path) => {
		path.basename = path.basename.replace('.jsx', '');
	})).pipe(gulp.dest('./js')).pipe(browsersyncinstance.reload({
		stream: true
	}));
});

gulp.task('html', () => {
	gulp.src(htmlpath).pipe(gulp.dest('./')).pipe(browsersyncinstance.reload({
		stream: true
	}));
});

gulp.task('watchers', () => {
	gulp.watch(jsxpath, ['jsx']);
	gulp.watch(htmlpath, ['html']);
});

gulp.task('default', ['watchers', 'browsersync']);