const chai = require("chai");
const expect = chai.expect;
const App = require("../test/pageobjects/App");
const LoginLogout = require("../test/pageobjects/LoginLogout");

describe("Login and Logout smoke tests functionality", () => {
  it("Check Login button when required fields are filled in with valid data", async () => {
    await App.openLoginPage();
    await LoginLogout.fillLoginForm();
    let loggedInUserName = await (await LoginLogout.loggedInUserName).getText();
    await expect(await loggedInUserName).to.equal("test_1");
  });
  it("Check if Log out button redirects user to Login page", async () => {
    await App.openLoginPage();
    let alreadyLoggedIn = $("#loading-label");
    if (alreadyLoggedIn.isDisplayed()) {
      await (await LoginLogout.logoutButton).click();
      let welcomeMsg = await (await LoginLogout.welcomeMsg).getText();
      await expect(await welcomeMsg).to.contain("Login in Book Store");
    } else {
      await LoginLogout.fillLoginForm();
      await (await LoginLogout.logoutButton).click();
      let welcomeMsg = await (await LoginLogout.welcomeMsg).getText();
      await expect(await welcomeMsg).to.contain("Login in Book Store");
    }
  });
});
