class Profile {
  get deleteBook() {
    return $("#delete-record-undefined");
  }
  get okDeleteBookModal() {
    return $("#closeSmallModal-ok");
  }
  get deleteAccountBtn() {
    return $$("#submit")[1];
  }
}
module.exports = new Profile();
