const gulp = require('gulp');
const obt = require('origami-build-tools');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');
let appServer;

gulp.task('build', function () {
	return obt.build(gulp, {
		sass: './main.scss',
		buildCss: 'main.css',
		buildFolder: 'public',
		env: process.env.NODE_ENV
	});
});

gulp.task('build-page', function () {
	return obt.build(gulp, {
		sass: './main.scss',
		buildCss: 'main.css',
		buildFolder: 'public',
		env: process.env.NODE_ENV
	});
});

gulp.task('install', function () {
	return obt.install();
});

gulp.task('test', function () {
	return obt.test.npmTest(gulp);
});

gulp.task('serve', ['dev-add-livereload', 'build', 'build-page'], function (){
	appServer = nodemon({
		'script': 'demos/app.js',
		'verbose': true,
		'watch': false,
		'ignore': ['*.*']
	}).on('restart', function () {
		/*eslint no-console: ['error', { allow: ['warn', 'log'] }] */
		console.log('>>>>>>> nodemon app is restarting <<<<<<<<');
	});
});

gulp.task('restart-server', function () {
	appServer.restart();
});

gulp.task('refresh-page', ['build', 'build-page'], function () {
	livereload.changed('src/index.js');
});

gulp.task('watch', ['serve'], function () {
	livereload.listen({ port: process.env.LIVERELOAD_PORT });
	gulp.watch(['./**/*.scss', './demos/**/*'], ['refresh-page']);
	gulp.watch('./*.*', ['restart-server']);
});

gulp.task('dev-add-livereload', function () {
	process.env.DEV_ADD_LIVERELOAD = true;
});

gulp.task('default', ['build', 'build-page']);
gulp.task('dev');
