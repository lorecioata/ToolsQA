class BookStore {
  get bookGitGuide() {
    return $(".mr-2");
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
    await (await page).scrollIntoView();
    await (await page).waitForDisplayed();
    await (await page).click();
  }
  async randomBook() {
    let books = await $$(function () {
      return this.document.querySelectorAll(".mr-2");
    });
    let randomBook = books[Math.floor(Math.random() * books.length)];
    return randomBook;
  }
  async addToCollectionBtn() {
    let addToCollectionBtn = await $$(function () {
      return this.document.querySelectorAll("#addNewRecordButton");
    });
    return addToCollectionBtn;
  }
  async profileBtn() {
    let profileBtn = await $$(function () {
      return this.document.querySelectorAll("#item-3");
    });
    return profileBtn;
  }
  async bookStoreBtn() {
    let bookStoreBtn = await $$(function () {
      return this.document.querySelectorAll("#item-2");
    });
    return bookStoreBtn;
  }
}
module.exports = new BookStore();
