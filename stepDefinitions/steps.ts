import { Given, When, Then } from "cucumber";
import { async } from "q";
import { SuperCalc } from "../po/Supercalc";
import { browser } from "protractor";
import { AngularHomePage } from "../po/AngularHomePage";
import chai from "chai";

var expect = chai.expect;
let sc = new SuperCalc();
let ah = new AngularHomePage();

Given('I navigate to SuperCalc Site', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
    //return 'pending';
});

Given('I navigate to {string} Site', async(string)=> {
    // Write code here that turns the phrase above into concrete actions
    if(string=="SuperCalc"){
        await browser.get('http://juliemr.github.io/protractor-demo/'); //Super Calculator site
    } else if (string == "Angular.js") {
        await browser.get("https://angularjs.org/");
    }
  });

When('I {string} number {string} and {string}', async(operator, string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await sc.number1Input.sendKeys(string);
    await sc.number2Input.sendKeys(string2);
    
    switch(operator) {
        case "multiply":
            await sc.multOperator.click(); //clicks on the dropdown element to change to multiplication
            break;
        case "add":
        await sc.addOperator.click(); //clicks on the dropdown element to change to addition
            break;
        case "substract":
            await sc.subsOperator.click(); //clicks on the dropdown element to change to substractiob
            break;

        case "divide":
            await sc.divOperator.click(); //clicks on the dropdown element to change to division
            break;
        case "modulo":
            await sc.modOperator.click(); //clicks on the dropdown element to change to modulo
            break;
        default:
          console.log("Invalid operator " + operator);
      }

    //return 'pending';
});

Then('The displayed result is {string}', async(string)=> {
    // Write code here that turns the phrase above into concrete actions
    await sc.submitButton.click();

    await sc.getResult.getText().then(function (text){
        expect(text).to.equal(string);
    })
   // return 'pending';
});

When('I click on angular.io link', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await ah.angularIOLink.click();
});

When('I navigate to the angular.io Site', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(2000);
    console.log("Navigate to angular.io site");
});

Then('I enter {string} on the seach text box', async(string)=> {
    // Write code here that turns the phrase above into concrete actions
    await ah.searchInput.sendKeys(string);
    await browser.sleep(2000);
});