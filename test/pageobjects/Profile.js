class Profile {
  get deleteBook() {
    return $("#delete-record-undefined");
  }
  get okDeleteBookModal() {
    return $("#closeSmallModal-ok");
  }
  async deleteAccountBtn() {
    let deleteAccountBtn = await $$(function () {
      return this.document.querySelectorAll("#submit");
    });
    return deleteAccountBtn;
  }
}
module.exports = new Profile();
