'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', function (callback) {
    return runSequence(
        ['build', 'copy', 'serve'],
        'watch',
        callback
    );
});
