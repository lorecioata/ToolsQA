class HomePage {
  get logoImg() {
    return $("#app img");
  }
  get mainHeaderOfEntity() {
    return $(".pattern-backgound");
  }
  async mainHeaders() {
    let mainHeader = await $$(function () {
      return this.document.querySelectorAll(".pattern-backgound");
    });
    return mainHeader;
  }
  async cards() {
    let card = await $$(function () {
      return this.document.querySelectorAll(".card");
    });
    return card;
  }
}
module.exports = new HomePage();
