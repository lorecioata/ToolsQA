const { expect } = require("chai");
const App = require("../test/pageobjects/App");
const BookStore = require("../test/pageobjects/BookStore");
const LoginLogout = require("../test/pageobjects/LoginLogout");
const Profile = require("../test/pageobjects/Profile");

describe("Profile smoke tests functionality", () => {
  beforeEach(async () => {
    await App.openProfilePage();
  });
  it("Check if Profile page is visible when logged in", async () => {
    if (await (await BookStore.notLoggedInLabel).isDisplayed()) {
      await BookStore.scrollAndAccessPage(await BookStore.inProfileLoginBtn);
      await LoginLogout.loginWithValidData();
    }
    await browser.pause(1000);
    expect(await Profile.deleteAccountBtn.waitForDisplayed()).to.equal(true);
  });
  it("Check if books on Profile page can be removed from Personal Collection", async () => {
    await App.openBookStorePage();
    if ((await (await LoginLogout.logoutButton).isDisplayed()) == false) {
      await (await LoginLogout.loginButton).waitForDisplayed();
      await (await LoginLogout.loginButton).click();
      await LoginLogout.loginWithValidData();
    }
    await BookStore.scrollAndAccessPage(await BookStore.bookGitGuide);
    await BookStore.scrollAndAccessPage(await BookStore.addToCollectionBtn);
    await browser.acceptAlert();
    await BookStore.accessProfile();
    await (await Profile.deleteBook).click();
    await (await Profile.okDeleteBookModal).click();
    let ALERTTEXT = await browser.getAlertText();
    expect(ALERTTEXT).to.contain("Book deleted.");
  });
  it("Check if Profile page is not visible when not logged in", async () => {
    if (await (await LoginLogout.logoutButton).isDisplayed()) {
      await (await LoginLogout.logoutButton).click();
      await App.openProfilePage();
    }
    let notLoggedInLabel = await (await BookStore.notLoggedInLabel).getText();
    expect(notLoggedInLabel).to.contain(
      "Currently you are not logged into the Book Store application"
    );
  });
});
