'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const connect = require('gulp-connect-php');
const config = require('../config');

gulp.task('serve', () => {
    connect.server({
        base: 'httpdocs',
        port: 8000,
        router: config.paths.dst.root + '/route.php'
    }, function () {
      browserSync({
          proxy: '127.0.0.1:8000',
          open: true
      });
    });
});
