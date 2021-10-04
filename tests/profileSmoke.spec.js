const { expect } = require("chai");
const { alertIsPresent } = require("wdio-wait-for");
const App = require("../test/pageobjects/App");
const BookStore = require("../test/pageobjects/BookStore");
const LoginLogout = require("../test/pageobjects/LoginLogout");
const Profile = require("../test/pageobjects/Profile");

describe("Profile smoke tests functionality", () => {
  beforeEach(async () => {
    await App.openProfilePage();
    if (await (await App.ad).isDisplayed()) {
      await App.removeAd();
    }
  });
  it("Check if Profile page is visible when logged in", async () => {
    if (await (await BookStore.notLoggedInLabel).isDisplayed()) {
      await BookStore.scrollAndAccessPage(await BookStore.inProfileLoginBtn);
      await LoginLogout.loginWithValidData();
    }
    await browser.pause(1000);
    let deleteAccountBtn = await Profile.deleteAccountBtn();
    await App.scrollAndWaitForDisplayed(deleteAccountBtn[1]);
    expect(await deleteAccountBtn[1].isDisplayed()).to.equal(true);
  });
  it("Check if books on Profile page can be removed from Personal Collection", async () => {
    await App.openBookStorePage();
    if ((await (await LoginLogout.logoutButton).isDisplayed()) == false) {
      await BookStore.scrollAndAccessPage(await LoginLogout.loginButton);
      await LoginLogout.loginWithValidData();
    }
    if (await (await App.ad).isDisplayed()) {
      await App.removeAd();
    }
    await browser.pause(1000);
    let randomBook = await BookStore.randomBook();
    await BookStore.scrollAndAccessPage(randomBook);
    let addToCollectionBtn = await BookStore.addToCollectionBtn();
    await BookStore.scrollAndAccessPage(addToCollectionBtn[1]);
    await browser.pause(1000);
    if (alertIsPresent()) await browser.acceptAlert();
    let accessProfileBtn = await BookStore.profileBtn();
    await BookStore.scrollAndAccessPage(accessProfileBtn[4]);
    await BookStore.scrollAndAccessPage(await Profile.deleteBook);
    await BookStore.scrollAndAccessPage(await Profile.okDeleteBookModal);
    await browser.pause(1000);
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
