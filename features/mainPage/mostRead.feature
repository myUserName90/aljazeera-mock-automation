Feature: Validate "Most Popular" Section on Different Devices

  Scenario: Ensure "Most Popular" section appears on Desktop
    Given I am on the "MAIN" page with window size "DESKTOP"
    Then I should see the "Most Popular" section

  Scenario: Ensure "Most Popular" section has 10 posts on Desktop
    Given I am on the "MAIN" page with window size "DESKTOP"
    Then the "Most Popular" section should contain 10 posts

  Scenario: Ensure "Most Popular" section does not appear on Mobile
    Given I am on the "MAIN" page with window size "MOBILE"
    Then the "Most Popular" section should not be visible

  Scenario: Ensure bypass block menu item for "Most Read" is working on Desktop
    Given I am on the "MAIN" page with window size "DESKTOP"
    When I click on the empty white space on the left side of the website's logo
    And I press the "Tab" key
    Then the "Bypass Blocks" menu should be visible
    When I click the "Skip to Most Read" option in the "Bypass Blocks" menu
    Then the URL should change to include "/#most-read-container"
