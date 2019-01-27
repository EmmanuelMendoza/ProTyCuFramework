Feature: I am validating AngularIO site

@AngularTest
Scenario Outline:  Validate AngularIO Website

Given I navigate to "Angular.js" Site
When I click on angular.io link
And I navigate to the angular.io Site
Then I enter "<search_term>" on the seach text box

Examples:
| search_term   |
| Hello         |
| Documentation |