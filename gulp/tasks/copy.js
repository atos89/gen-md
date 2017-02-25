'use strict';

const gulp = require('gulp');
const config = require('../config');

gulp.task('copy', ['copy:php']);

gulp.task('copy:php', () => {
    return gulp.src([
        config.paths.src.root + '/*.php'
    ])
    .pipe(gulp.dest(config.paths.dst.root));
});
