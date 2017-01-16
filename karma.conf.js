//jshint strict: false

module.exports = function(config) {
  config.set({

    files: [
      '../frontend-seed/app/tests.webpack.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      '../frontend-seed/app/tests.webpack.js': ['webpack', 'sourcemap']
    },

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    singleRun: true,

    webpack: require('./webpack.config'),

  });
};
