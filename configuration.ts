//import {browser} from "protractor";
import {Config} from "protractor";

//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config: Config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,

//onPrepare: function() {
    //browser.driver.manage().window().maximize();
	// jasmine.getEnv().addReporter(
    //   new Jasmine2HtmlReporter({
    //     savePath: 'target/screenshots'
    //   })
    // );
 //},

 capabilities: {
     browserName: 'chrome'
 },

 specs: ['testspec.js'],
 
//  suites: {
// 	 Smoke: ['alerts.js', 'dropDowns.js'],
// 	 Regression: 'elementBasics.js'
//  },
 
  jasmineNodeOpts: {
 	    showColors: true, // Use colors in the command line report.
 	  }

};