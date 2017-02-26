'use strict';

const config = require('../config');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const ignore = require('gulp-ignore');
const stylus = require('gulp-stylus');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

gulp.task('build', ['clean', 'build:js', 'build:stylus']);

gulp.task('build:js', () => {
    return gulp.src([
        config.paths.src.js + '/*.js'
    ])
    .pipe(uglify())
    .pipe(rename({
        basename: 'gen-md',
        extname: '.js'
    }))
    .pipe(gulp.dest(config.paths.dst.js));
});

gulp.task('build:stylus', () => {
    return gulp.src(config.paths.src.stylus + '/main.styl')
    .pipe(ignore.exclude([
        '/**/_*.styl'
    ]))
    .pipe(stylus())
    .pipe(csso())
    .pipe(rename({
        basename: 'gen-md',
        extname: '.css'
    }))
    .pipe(gulp.dest(config.paths.dst.css));
});
