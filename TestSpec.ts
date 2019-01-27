
import {browser} from "protractor";
import {element} from "protractor";
import {by} from "protractor";
import { async } from "q";
import { SuperCalc } from "./po/Supercalc";
import { AngularHomePage } from "./po/AngularHomePage";

// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Chain locators demo", ()=> {
	//Opens the Angular JS Website
	it("Locators test case", async()=> {
		
		let sc = new SuperCalc();
		let expectedResult:string = "15";
		
        await browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
		
		await sc.number1Input.sendKeys("3");
		await sc.number2Input.sendKeys("5");
		
		await sc.multOperator.click(); //clicks on the dropdown element to change to multiplication

		await sc.submitButton.click();

		sc.getResult.getText().then(function (text){
			expect(text).toEqual(expectedResult);
			console.log(text);
		})
    })
    
    it("Angular Home page title validation", async()=> {

		let ah = new AngularHomePage();

        await browser.get("https://angularjs.org/");
        await ah.angularIOLink.click();
		await ah.searchInput.sendKeys("Hello");
    })
	
	//Close the browser
	it("Close the browser", async()=>{
		await browser.sleep(1000);
		await browser.quit();
	})
})