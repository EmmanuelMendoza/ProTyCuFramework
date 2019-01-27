import { ElementFinder, element, by } from "protractor";

export class AngularHomePage {

    angularIOLink:ElementFinder;
    searchInput:ElementFinder;

    constructor() {
        this.angularIOLink = element(by.linkText("angular.io"));
        this.searchInput = element(by.css("input[type='search']"));
    }
}