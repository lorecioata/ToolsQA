class Profile {
  get profileTitle() {
    return $(".main-header=Profile");
  }
  get deleteBook() {
    return $("#delete-record-undefined");
  }
  get okDeleteBookModal() {
    return $("#closeSmallModal-ok");
  }
}
module.exports = new Profile();
