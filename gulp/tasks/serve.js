'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const connect = require('gulp-connect-php');

gulp.task('serve', () => {
    connect.server({
        base: 'dist',
        port: 8000
    }, function () {
      browserSync({
          proxy: '127.0.0.1:8000',
          open: true
      });
    });
})
