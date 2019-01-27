import { ElementFinder, element, by } from "protractor";

export class SuperCalc {
    
    number1Input:ElementFinder;
    number2Input:ElementFinder;
    submitButton:ElementFinder;
    multOperator:ElementFinder;
    addOperator:ElementFinder;
    subsOperator:ElementFinder;
    divOperator:ElementFinder;
    modOperator:ElementFinder;
    getResult:ElementFinder;
    
    constructor(){
        this.number1Input = element(by.model("first"));
        this.number2Input = element(by.model("second"));
        this.submitButton = element(by.id("gobutton"));
        this.addOperator = element(by.model("operator")).element(by.css("option:nth-child(1)"));
        this.divOperator = element(by.model("operator")).element(by.css("option:nth-child(2)"));
        this.modOperator = element(by.model("operator")).element(by.css("option:nth-child(3)"));
        this.multOperator = element(by.model("operator")).element(by.css("option:nth-child(4)"));
        this.subsOperator = element(by.model("operator")).element(by.css("option:nth-child(5)"));
        this.getResult = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
}