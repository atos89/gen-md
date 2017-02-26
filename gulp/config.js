'use strict';

const paths = {
    src: {
        root: './src',
        assets: './src/assets',
        js: './src/assets/js',
        stylus: './src/assets/stylus',
        libs: './src/assets/libs',
        app: './app'
    },
    dst: {
        root: './httpdocs',
        assets: './httpdocs/assets',
        js: './httpdocs/assets/js',
        css: './httpdocs/assets/css',
        libs: './httpdocs/assets/libs'
    }
};

module.exports = {
  paths: paths
};
