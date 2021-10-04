const { expect } = require("chai");
const App = require("../test/pageobjects/App");
const BookStore = require("../test/pageobjects/BookStore");
const HomePage = require("../test/pageobjects/HomePage");
const LoginLogout = require("../test/pageobjects/LoginLogout");

describe("Book Store smoke tests functionality", () => {
  beforeEach(async () => {
    await App.openBookStorePage();
    if (await App.ad.isDisplayed()) {
      await App.removeAd();
    }
    if (await (await LoginLogout.logoutButton).isDisplayed()) {
      await BookStore.scrollAndAccessPage(await LoginLogout.logoutButton);
    }
    await (await LoginLogout.loginButton).waitForDisplayed();
    await (await LoginLogout.loginButton).click();
    await LoginLogout.loginWithValidData();
  });

  it("Check if Add to Your Collection button is enabled when logged in", async () => {
    if (await (await LoginLogout.loginButton).isDisplayed()) {
      await BookStore.scrollAndAccessPage(await LoginLogout.loginButton);
      await LoginLogout.loginWithValidData();
    }
    await BookStore.scrollAndAccessPage(await BookStore.bookGitGuide);
    let addToCollection = await BookStore.addToCollectionBtn.isEnabled();
    expect(addToCollection).is.equal(true);
    await BookStore.scrollAndAccessPage(await LoginLogout.logoutButton);
  });

  it("Check if Add to You Collection button is visible when not logged in", async () => {
    if (await (await LoginLogout.logoutButton).isDisplayed()) {
      await BookStore.scrollAndAccessPage(await LoginLogout.logoutButton);
    }
    await BookStore.scrollAndAccessPage(await BookStore.bookGitGuide);
    let addToCollection =
      await BookStore.addToCollectionBtn.isDisplayedInViewport();
    expect(addToCollection).is.equal(false);
  });
  it("Check if click on Go to Book Store button, Profile page changes to Book Store page", async () => {
    await BookStore.accessProfile();
    if (await (await BookStore.notLoggedInLabel).isDisplayed()) {
      await BookStore.scrollAndAccessPage(await BookStore.inProfileLoginBtn);
      await LoginLogout.loginWithValidData();
    }
    await BookStore.scrollAndAccessPage(await BookStore.goToBookStoreBtn);
    let bookStoreTitle = await (await HomePage.mainHeaderOfEntity).getText();
    expect(bookStoreTitle).to.contain("Book Store");
  });
});
