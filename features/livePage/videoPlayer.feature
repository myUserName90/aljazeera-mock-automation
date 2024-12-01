@regression @ive @ui @live
Feature: Validate player in Livestream page

  @critical-priority @smoke
  Scenario: Validate Player is visible in Livestream Player
    Given I am on the "LIVE" page with window size "DESKTOP"
    When Video player is loaded
    Then Player should be visible

  @low-priority @regression
  Scenario: Validate Switch Player is Visible in LiveStream Player
    Given I am on the "LIVE" page with window size "DESKTOP"
    When Video player is loaded
    Then the "Switch Player" button should be visible
