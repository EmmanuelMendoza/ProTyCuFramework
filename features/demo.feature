Feature: I am validating SuperCalc functionality

@SuperCalcTest
Scenario Outline: SuperCalc Math Operations Testing with intentional error

Given I navigate to "SuperCalc" Site
When I "<operation>" number "<number_1>" and "<number_2>"
Then The displayed result is "<result>"

Examples:
| operation | number_1  | number_2  | result    |
| multiply  | 5         | 3         | 15        |
| add       | 5         | 3         | 8         |
| substract | 5         | 3         | 2         |
| divide    | 15        | 3         | 5         |
| modulo    | 4         | 2         | 2         |