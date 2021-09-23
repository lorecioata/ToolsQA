class BookStore {
  get bookStoreBtn() {
    return $("#item-2*=Book Store");
  }
  get profileBtn() {
    return $("#item-3*=Profile");
  }
  get bookGitGuide() {
    return $("=Git Pocket Guide");
  }
  get addToCollectionBtn() {
    return $("#addNewRecordButton");
  }
  get notLoggedInLabel() {
    return $("#notLoggin-label");
  }
  get inProfileLoginBtn() {
    return $("=login");
  }
  get goToBookStoreBtn() {
    return $("#gotoStore");
  }
  get bookStoreTitle() {
    return $(".main-header=Book Store");
  }
  async accessBookStore() {
    await this.bookStoreBtn.scrollIntoView();
    await this.bookStoreBtn.click();
  }
  async accessBookGitGuide() {
    await this.bookGitGuide.click();
  }
  async accessProfile() {
    await this.profileBtn.scrollIntoView();
    await this.profileBtn.click();
  }
  async goToBookStore() {
    await this.goToBookStoreBtn.scrollIntoView();
    await this.goToBookStoreBtn.click();
  }
}
module.exports = new BookStore();
