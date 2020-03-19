//import {browser} from "protractor";
import {Config} from "protractor";

var reporter = require('cucumber-html-reporter');

//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config: Config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

 capabilities: {
     browserName: 'chrome'
 },

 specs: ['../features/demo.feature'],
 cucumberOpts: {
    //tags: "@angulaTesting",
    format: 'json:./cucumberreport.json',
        
    // require step definitions
        require: [
          './stepsDefinitions/*.js' // accepts a glob
        ]

 },
    
    onComplete: () => {
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome   80.0.3987.132",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);

    }

};