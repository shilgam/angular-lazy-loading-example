// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, '../coverage'),
        reports: ['html', 'lcovonly'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browserNoActivityTimeout: 100000,
      browserDisconnectTolerance: 2,
      browserDisconnectTimeout: 30000,
      browsers: ['Chrome_in_CI'],
      customLaunchers: {
        Chrome_in_CI: {
          base: 'ChromeHeadless',
          flags: [
            '--no-sandbox',
            '--disable-gpu', '--window-size=1024x768',
            '--disable-translate', '--disable-extensions',
            '--remote-debugging-port=9222'
          ]
        }
      },
      singleRun: true,
      restartOnFileChange: false
    });
  };
