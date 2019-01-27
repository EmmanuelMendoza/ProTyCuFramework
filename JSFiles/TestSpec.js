"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Supercalc_1 = require("./po/Supercalc");
const AngularHomePage_1 = require("./po/AngularHomePage");
// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Chain locators demo", () => {
    //Opens the Angular JS Website
    it("Locators test case", () => __awaiter(this, void 0, void 0, function* () {
        let sc = new Supercalc_1.SuperCalc();
        let expectedResult = "15";
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
        yield sc.number1Input.sendKeys("3");
        yield sc.number2Input.sendKeys("5");
        yield sc.multOperator.click(); //clicks on the dropdown element to change to multiplication
        yield sc.submitButton.click();
        sc.getResult.getText().then(function (text) {
            expect(text).toEqual(expectedResult);
            console.log(text);
        });
    }));
    it("Angular Home page title validation", () => __awaiter(this, void 0, void 0, function* () {
        let ah = new AngularHomePage_1.AngularHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield ah.angularIOLink.click();
        yield ah.searchInput.sendKeys("Hello");
    }));
    //Close the browser
    it("Close the browser", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.browser.quit();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkNBQW1DO0FBSW5DLDhDQUEyQztBQUMzQywwREFBdUQ7QUFFdkQscUNBQXFDO0FBQ3JDLHdFQUF3RTtBQUN4RSxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRSxFQUFFO0lBQ25DLDhCQUE4QjtJQUM5QixFQUFFLENBQUMsb0JBQW9CLEVBQUUsR0FBTyxFQUFFO1FBRWpDLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksY0FBYyxHQUFVLElBQUksQ0FBQztRQUUzQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBRXBGLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyw0REFBNEQ7UUFFM0YsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTlCLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDQSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQU8sRUFBRTtRQUVwRCxJQUFJLEVBQUUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUV6QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVMLG1CQUFtQjtJQUNuQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBTyxFQUFFO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSJ9