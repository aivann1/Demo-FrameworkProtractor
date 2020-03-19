import { Given, When, Then } from "cucumber";
import { calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";

var expect = chai.expect;
let calc = new calculator();
let ah = new angularHomePage();

         Given('I will navigate to {string} page', async (page) => {
           // Write code here that turns the phrase above into concrete actions
           if (page=='Calc'){
            await browser.get('http://juliemr.github.io/protractor-demo/');
           }
           else if(page=='AngulaJs')
           await browser.get('https://angularjs.org/');
         });

         When('I add numbers {string} and {string}', async (string, string2) => {
            // Write code here that turns the phrase above into concrete actions
            await calc.firstEditBox.sendKeys(string);
            await calc.secondEditBox.sendKeys(string2);
            
          });

          Then('the displayed output should be {string}', async (string) => {
            // Write code here that turns the phrase above into concrete actions
            await calc.goButton.click();
            await calc.getResult.getText().then(function (text) {
                expect(text).to.equal(string);
            });
          });

          When('I clicked on header link', async () => {
            // Write code here that turns the phrase above into concrete actions
            await ah.angularLink.click();
          });

          When('I was redirected to angular page', async () => {
            // Write code here that turns the phrase above into concrete actions
            await browser.sleep(3000);
          });

          Then('I enter {string} in search bar', async (string) => {
            // Write code here that turns the phrase above into concrete actions
            await ah.search.sendKeys("hello");
          });