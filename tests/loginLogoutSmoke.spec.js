const { expect } = require("chai");
const App = require("../test/pageobjects/App");
const LoginLogout = require("../test/pageobjects/LoginLogout");

describe("Login and Logout smoke tests functionality", () => {
  beforeEach(async () => {
    await App.openLoginPage();
    await LoginLogout.loginWithValidData();
  });
  it("Check if user can login when required fields are filled in with valid data", async () => {
    await (await LoginLogout.loggedInUserName).waitForDisplayed();
    let loggedInUserName = await (await LoginLogout.loggedInUserName).getText();
    expect(loggedInUserName).to.equal("test_1");
    await LoginLogout.logoutButton.click();
  });
  it("Check if Log out button redirects user to Login page", async () => {
    if (await (await LoginLogout.loginButton).isDisplayed()) {
      await LoginLogout.loginWithValidData();
    }
    await (await LoginLogout.logoutButton).click();
    await (await LoginLogout.welcomeMsg).waitForDisplayed();
    let welcomeMsg = await (await LoginLogout.welcomeMsg).getText();
    expect(welcomeMsg).to.contain("Login in Book Store");
  });
});
