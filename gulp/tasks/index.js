'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

gulp.task('serve', () => {
    connect.server({
        base: 'app',
        port: 8000
    }, function () {
      browserSync({
          proxy: '127.0.0.1:8000',
          open: true
      });
    });
})

gulp.task('default', ['serve']);
