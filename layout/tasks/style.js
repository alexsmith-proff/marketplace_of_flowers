const {
	src,
	dest
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function style() {
	return src('src/scss/**/*.scss')
		.pipe(map.init())
		.pipe(bulk())
		.pipe(sass())
		.pipe(prefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}))
		.pipe(concat('style.css'))
		.pipe(map.write('../sourcemaps/'))
		.pipe(dest('build/css/'))
		.pipe(bs.stream())
}