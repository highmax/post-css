var gulp    = require('gulp'),
	es6Promise = require('es6-promise').polyfill(),
    postcss = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    cssnext = require('cssnext'),
    precss = require('precss');

gulp.task('css', function() {
    
    var processors = [
    	autoprefixer(['last 1 version']),
    	cssnext,
    	precss
    ];

    return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});


 
