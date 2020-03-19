"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
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
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwwRUFBMEU7QUFDL0QsUUFBQSxNQUFNLEdBQVc7SUFDMUIsa0RBQWtEO0lBQ2xELGFBQWEsRUFBQyxJQUFJO0lBRXBCLHlCQUF5QjtJQUNyQiw4Q0FBOEM7SUFDakQsZ0NBQWdDO0lBQzdCLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsT0FBTztJQUNQLEtBQUs7SUFDUixJQUFJO0lBRUosWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFFdkIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQ0FBbUM7SUFDbkMsTUFBTTtJQUVKLGVBQWUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0NBRUosQ0FBQyJ9