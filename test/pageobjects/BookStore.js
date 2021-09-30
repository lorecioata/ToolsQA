class BookStore {
  get profileBtn() {
    return $$("#item-3")[4];
  }
  get bookStoreBtn() {
    return $$("#item-2")[4];
  }
  get bookGitGuide() {
    return $(".mr-2");
  }
  get addToCollectionBtn() {
    return $$("#addNewRecordButton")[1];
  }
  get notLoggedInLabel() {
    return $("#notLoggin-label");
  }
  get inProfileLoginBtn() {
    return $("#notLoggin-label > a:nth-child(1)");
  }
  get goToBookStoreBtn() {
    return $("#gotoStore");
  }
  async scrollAndAccessPage(page) {
    await page.scrollIntoView();
    await page.waitForDisplayed();
    await page.click();
  }
  async accessProfile() {
    await this.profileBtn.scrollIntoView();
    await this.profileBtn.waitForDisplayed();
    await this.profileBtn.click();
  }
  async accessBookStore() {
    await this.bookStoreBtn.scrollIntoView();
    await this.bookStoreBtn.waitForDisplayed();
    await this.bookStoreBtn.click();
  }
}
module.exports = new BookStore();
