"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
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
    specs: ['../features/demo.feature', '../features/angulario.feature'],
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
            options: {
                displayDuration: true,
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                removeOriginalJsonReportFile: true,
                reportName: 'demo.feature Report',
                reportPath: 'reports/',
            }
        }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGdDQUFnQztBQUNyQixRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBQyxJQUFJO0lBRWpCLHVDQUF1QztJQUN4QyxTQUFTLEVBQUUsUUFBUTtJQUVuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHL0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQzNCO1FBQ0QsUUFBUSxFQUFFO1lBRVIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1NBQ0Y7S0FDRjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLDBCQUEwQixFQUFDLCtCQUErQixDQUFDO0lBRW5FLFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixxQ0FBcUM7UUFDckMsc0JBQXNCO1FBQ3RCLE1BQU0sRUFBRSxxQ0FBcUM7UUFDN0MsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCO1NBQ3pCO0tBQ0o7SUFFRCxPQUFPLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxtREFBbUQ7WUFDNUQsT0FBTyxFQUFDO2dCQUNOLGVBQWUsRUFBRSxJQUFJO2dCQUNyQiwyQkFBMkIsRUFBRSxJQUFJO2dCQUNqQyw0QkFBNEIsRUFBRSxJQUFJO2dCQUNsQyw0QkFBNEIsRUFBRSxJQUFJO2dCQUNsQyxVQUFVLEVBQUUscUJBQXFCO2dCQUNqQyxVQUFVLEVBQUUsVUFBVTthQUN2QjtTQUNKLENBQUM7Q0FFRCxDQUFDIn0=