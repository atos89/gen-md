'use strict';

const gulp = require('gulp');
const config = require('../config');

gulp.task('copy', ['copy:libs']);

gulp.task('copy:libs', () => {
    return gulp.src([
        config.paths.src.libs + '/**/*'
    ])
    .pipe(gulp.dest(config.paths.dst.libs));
});
