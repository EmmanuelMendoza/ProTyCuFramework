"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const Supercalc_1 = require("../po/Supercalc");
const protractor_1 = require("protractor");
const AngularHomePage_1 = require("../po/AngularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let sc = new Supercalc_1.SuperCalc();
let ah = new AngularHomePage_1.AngularHomePage();
cucumber_1.Given('I navigate to SuperCalc Site', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
    //return 'pending';
}));
cucumber_1.Given('I navigate to {string} Site', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "SuperCalc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/'); //Super Calculator site
    }
    else if (string == "Angular.js") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I {string} number {string} and {string}', (operator, string, string2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield sc.number1Input.sendKeys(string);
    yield sc.number2Input.sendKeys(string2);
    switch (operator) {
        case "multiply":
            yield sc.multOperator.click(); //clicks on the dropdown element to change to multiplication
            break;
        case "add":
            yield sc.addOperator.click(); //clicks on the dropdown element to change to addition
            break;
        case "substract":
            yield sc.subsOperator.click(); //clicks on the dropdown element to change to substractiob
            break;
        case "divide":
            yield sc.divOperator.click(); //clicks on the dropdown element to change to division
            break;
        case "modulo":
            yield sc.modOperator.click(); //clicks on the dropdown element to change to modulo
            break;
        default:
            console.log("Invalid operator " + operator);
    }
    //return 'pending';
}));
cucumber_1.Then('The displayed result is {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield sc.submitButton.click();
    yield sc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
    // return 'pending';
}));
cucumber_1.When('I click on angular.io link', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularIOLink.click();
}));
cucumber_1.When('I navigate to the angular.io Site', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(2000);
    console.log("Navigate to angular.io site");
}));
cucumber_1.Then('I enter {string} on the seach text box', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.searchInput.sendKeys(string);
    yield protractor_1.browser.sleep(2000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3QywrQ0FBNEM7QUFDNUMsMkNBQXFDO0FBQ3JDLDJEQUF3RDtBQUN4RCxnREFBd0I7QUFFeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUUvQixnQkFBSyxDQUFDLDhCQUE4QixFQUFFLEdBQU8sRUFBRTtJQUMzQyxvRUFBb0U7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUMsY0FBYztJQUM5RSxtQkFBbUI7QUFDdkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUNoRCxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUUsV0FBVyxFQUFDO1FBQ25CLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtLQUMxRjtTQUFNLElBQUksTUFBTSxJQUFJLFlBQVksRUFBRTtRQUMvQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDL0M7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUM5RSxvRUFBb0U7SUFDcEUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhDLFFBQU8sUUFBUSxFQUFFO1FBQ2IsS0FBSyxVQUFVO1lBQ1gsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsNERBQTREO1lBQzNGLE1BQU07UUFDVixLQUFLLEtBQUs7WUFDVixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxzREFBc0Q7WUFDaEYsTUFBTTtRQUNWLEtBQUssV0FBVztZQUNaLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLDBEQUEwRDtZQUN6RixNQUFNO1FBRVYsS0FBSyxRQUFRO1lBQ1QsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsc0RBQXNEO1lBQ3BGLE1BQU07UUFDVixLQUFLLFFBQVE7WUFDVCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxvREFBb0Q7WUFDbEYsTUFBTTtRQUNWO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsQ0FBQztLQUMvQztJQUVILG1CQUFtQjtBQUN2QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDcEQsb0VBQW9FO0lBQ3BFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUU5QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNILG9CQUFvQjtBQUN2QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQU8sRUFBRTtJQUN4QyxvRUFBb0U7SUFDcEUsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUUsR0FBTyxFQUFFO0lBQy9DLG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDMUQsb0VBQW9FO0lBQ3BFLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=