var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var path = require('path');
var sass = require('gulp-sass');
var uglify = require('gulp-uglifycss');
var addSrc = require('gulp-add-src');

gulp.task('development',
	[
		'bundle',
		'watchBundle',
		'html',
		'watchHtml',
		'images',
		'fonts',
		'sNcss',
		'watchsNcss'
	]
);

gulp.task('bundle', function() {
	return gulp
				.src([
						path.join(__dirname,'node_modules','react','dist','react.js'),
						path.join(__dirname,'node_modules','react-dom','dist','react-dom.js'),
						path.join(__dirname,'node_modules','jquery','dist','jquery.js'),
						path.join(__dirname,'js','materialize.min.js'),
						path.join(__dirname, 'components', '**', '*.js')
					])
				.pipe(concat('bundle.js'))
				.pipe(babel({
					comments: false,
					minified: true,
					compact: true,
					presets:['react']
				}))
				.pipe(gulp.dest(path.join(__dirname, 'bin')));
});

gulp.task('watchBundle', function(){
	gulp.watch(path.join(__dirname, 'components', '**', '*.js'), ['bundle']);
});

gulp.task('html', function() {
	return gulp
				.src('_index.html')
				.pipe(rename('index.html'))
				.pipe(gulp.dest(path.join(__dirname, 'bin')));
});

gulp.task('watchHtml', function(){
	gulp.watch(path.join(__dirname, '_index.html'), ['html']);
});

gulp.task('images', function() {
	return gulp
				.src(path.join(__dirname, 'images', '**', '*.*'))
				.pipe(gulp.dest(path.join(__dirname, 'bin', 'images')));
});

gulp.task('fonts', function() {
	return gulp
				.src(path.join(__dirname, 'fonts', '**', '*.*'))
				.pipe(gulp.dest(path.join(__dirname, 'bin', 'fonts')));
});

gulp.task('sNcss', function() {
	return gulp
				.src(path.join(__dirname, 'sass', 'materialize.scss'))
				.pipe(sass())
				.pipe(addSrc(path.join(__dirname, 'css', '**', '*.css')))
				.pipe(concat('bundle.css'))
				.pipe(uglify())
				.pipe(gulp.dest(path.join(__dirname, 'bin')));
});

gulp.task('watchsNcss', function(){
	gulp.watch(path.join(__dirname, 'sass', 'materialize.scss'), ['sNcss']);
	gulp.watch(path.join(__dirname, 'css', '**', '*.css'), ['sNcss']);
	gulp.watch(path.join(__dirname, 'sass', 'components', '*.scss'), ['sNcss']);
});
