/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jsmin = require('gulp-jsmin'),
    htmlmin = require('gulp-htmlmin');

tasks = ['css', 'imgs', 'jsmin', 'htmlmin'];

gulp.task('default', tasks);

gulp.task('css', function() {
    gulp.src('src/**/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('imgs', function () {
    gulp.src(['src/**/*.jpg', 'src/**/*.png'])
        .pipe(gulp.dest('dist'));
});

gulp.task('jsmin', function() {
    gulp.src('src/**/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('htmlmin', function() {
    gulp.src('src//**/*.html')
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
        .pipe(gulp.dest('dist'));
});