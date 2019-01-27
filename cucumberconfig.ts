import {Config} from "protractor";
import { JsonFormatter } from "cucumber";

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true, //run protractor test without starting selenium server

     // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['disable-infobars']
      },
      metadata: {

        device: 'Lenovo T470p',
        platform: {
            name: 'Windows',
            version: '10'
        }
      }
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature','../features/angulario.feature'],

    cucumberOpts: {
        // require step definitions
        //tags:"@SuperCalcTest,@AngularTest",
        //tags:'@AngularTest',
        format: 'json:./reports/cucumber_report.json',
        require: [
          './stepDefinitions/*.js'
        ]
    },

    plugins: [{
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options:{
        displayDuration: true,
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        removeOriginalJsonReportFile: true,
        reportName: 'demo.feature Report',
        reportPath: 'reports/',
      }
  }]

  };