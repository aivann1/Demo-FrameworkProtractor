import {After, Before, Status} from "cucumber";
import { browser } from "protractor";

Before({tags: "@CalculaterTesting"}, function () {
  browser.driver.manage().window().maximize();
});

After({tags: "@CalculaterTesting"}, function () {
    console.log('The test is completed!');
  });

Before({tags: "@angulaTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log('I need to execute first');
});

After(async function (scenario) {
  if(scenario.result.status===Status.FAILED){
    //code to take screenshot
    
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});