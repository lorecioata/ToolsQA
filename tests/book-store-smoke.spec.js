const chai = require("chai");
const expect = chai.expect;
const App = require("../test/pageobjects/App");
const BookStore = require("../test/pageobjects/BookStore");
const LoginLogout = require("../test/pageobjects/LoginLogout");

describe("Book Store smoke tests functionality", () => {
  it("Check if Add to Your Collection button is enabled when logged in", async () => {
    await App.openBookStorePage();
    await LoginLogout.loginButton.click();
    await LoginLogout.fillLoginForm();
    await BookStore.accessBookGitGuide();
    let addToCollection = await BookStore.addToCollectionBtn.isEnabled();
    await expect(await addToCollection).is.equal(true);
  });
  it("Check if Add to You Collection button is not visible when not logged in", async () => {
    await App.openBookStorePage();
    if (await LoginLogout.logoutButton.isDisplayed()) {
      await (await LoginLogout.logoutButton).click();
      await BookStore.accessBookStore();
      await BookStore.accessBookGitGuide();
      await expect(
        await BookStore.addToCollectionBtn.isDisplayedInViewport()
      ).is.equal(false);
    } else {
      await BookStore.accessBookStore();
      await BookStore.accessBookGitGuide();
      await expect(
        await BookStore.addToCollectionBtn.isDisplayedInViewport()
      ).is.equal(false);
    }
  });
  it("Check if click on Go to Book Store button, Profile page changes to Book Store page", async () => {
    await App.openBookStorePage();
    await BookStore.accessProfile();
    if (await (await BookStore.notLoggedInLabel).isDisplayed()) {
      await (await BookStore.inProfileLoginBtn).click();
      await LoginLogout.fillLoginForm();
      await BookStore.goToBookStore();
      let bookStoreTitle = await (await BookStore.bookStoreTitle).getText();
      await expect(await bookStoreTitle).to.contain("Book Store");
    } else {
      await BookStore.goToBookStore();
      let bookStoreTitle = await (await BookStore.bookStoreTitle).getText();
      await expect(await bookStoreTitle).to.contain("Book Store");
    }
  });
});
