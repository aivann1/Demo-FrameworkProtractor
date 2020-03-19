import { browser } from "protractor";
import { element, by } from "protractor";
import { calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";


describe('Protractor element demoo', function () {

	it('Locators', async () => {

		let calc = new calculator();

		await browser.get('http://juliemr.github.io/protractor-demo/');
		await calc.firstEditBox.sendKeys('3');
		await calc.secondEditBox.sendKeys('5');
		await calc.goButton.click();
		calc.getResult.getText().then(function (text) {
			console.log("This is te calculator result: " + text);
		});

	})

	it('Angular home page title validation', async () => {
		let ah = new angularHomePage();
		await browser.get("https://angularjs.org/");
		await ah.angularLink.click();
		await browser.sleep(3000);
		await ah.search.sendKeys("hello");

	})

});