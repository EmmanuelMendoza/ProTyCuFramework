import {After, Before, Status} from "cucumber";
import { browser } from "protractor";

Before(function () {

});

Before({tags: "@SuperCalcTest"}, function () {
    browser.manage().window().maximize();
});

After({tags: "@SuperCalcTest"}, function () {
    console.log("SuperCalc Tests Complete");
});

Before({tags: "@AngularTest"}, function () {
    console.log("Angular Test Start");
});

After({tags: "@AngularTest"}, function () {
    console.log("Angular Test Ended");
});

After(async function(scenario) {
    if(scenario.result.status === Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});
