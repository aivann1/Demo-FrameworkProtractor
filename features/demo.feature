Feature: Validate the website functionalities

  @CalculaterTesting
  Scenario: Calculater add functionality testing
    Given I will navigate to "Calc" page
    When I add numbers "3" and "5"
    Then the displayed output should be "9"

  @angulaTesting
  Scenario Outline: Angular validations
    Given I will navigate to "AngulaJs" page
    When I clicked on header link
    And I was redirected to angular page
    Then I enter "<key>" in search bar

    Examples:
    | key   |
    | Hello |
    | Hey   |