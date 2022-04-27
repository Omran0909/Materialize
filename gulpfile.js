var gulp = require('gulp');
var concat = require('gulp-concat');

var csses = [
    'node_modules/materialize-css/dist/css/materialize.min.css',
];

var jses = [
    'node_modules/materialize-css/dist/js/materialize.min.js'
];  

function styles() {
    return gulp.src(csses)
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./Library'));
}

function js() {
    return gulp.src(jses)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./Library'));
}

exports.styles = styles;
exports.js = js;