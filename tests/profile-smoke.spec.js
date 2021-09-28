const chai = require("chai");
const expect = chai.expect;
const App = require("../test/pageobjects/App");
const BookStore = require("../test/pageobjects/BookStore");
const LoginLogout = require("../test/pageobjects/LoginLogout");
const Profile = require("../test/pageobjects/Profile");

describe("Book Store smoke tests functionality", () => {
  it("Check if Profile page is visible when logged in", async () => {
    await App.openProfilePage();
    if (await (await BookStore.notLoggedInLabel).isDisplayed()) {
      await (await BookStore.inProfileLoginBtn).click();
      await LoginLogout.fillLoginForm();
      await (await LoginLogout.logoutButton).waitForExist();
      await expect(
        await (await LoginLogout.logoutButton).isDisplayedInViewport()
      ).to.be.true;
    } else {
      await (await LoginLogout.logoutButton).waitForExist();
      await expect(
        await (await LoginLogout.logoutButton).isDisplayedInViewport()
      ).to.be.true;
    }
  });
  it("Check if books on Profile page can be removed from Personal Collection", async () => {
    await App.openBookStorePage();
    if (await (await LoginLogout.logoutButton).isDisplayed()) {
      await BookStore.accessBookGitGuide();
      await (await BookStore.addToCollectionBtn).scrollIntoView();
      await (await BookStore.addToCollectionBtn).click();
      await browser.acceptAlert();
      await BookStore.accessProfile();
      await (await Profile.deleteBook).click();
      await (await Profile.okDeleteBookModal).click();
      let ALERTTEXT = await browser.getAlertText();
      await expect(await ALERTTEXT).to.contain("Book deleted.");
    } else {
      await BookStore.accessProfile();
      await (await BookStore.inProfileLoginBtn).click();
      await LoginLogout.fillLoginForm();
      await BookStore.goToBookStore();
      await BookStore.accessBookGitGuide();
      await (await BookStore.addToCollectionBtn).scrollIntoView();
      await (await BookStore.addToCollectionBtn).click();
      await browser.acceptAlert();
      await BookStore.accessProfile();
      await (await Profile.deleteBook).click();
      await (await Profile.okDeleteBookModal).click();
      let ALERTTEXT = await browser.getAlertText();
      await expect(await ALERTTEXT).to.contain("Book deleted.");
    }
  });
  it("Check if Profile page is not visible when not logged in", async () => {
    await App.openProfilePage();
    if (await (await LoginLogout.logoutButton).isDisplayed()) {
      await (await LoginLogout.logoutButton).click();
      await App.openProfilePage();
      let notLoggedInLabel = await (await BookStore.notLoggedInLabel).getText();
      await expect(await notLoggedInLabel).to.contain(
        "Currently you are not logged into the Book Store application"
      );
    } else {
      await expect(await notLoggedInLabel).to.contain(
        "Currently you are not logged into the Book Store application"
      );
    }
  });
});
