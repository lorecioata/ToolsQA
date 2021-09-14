class HomePage {
  get logoImg() {
    return $("#app img");
  }
  get elementsCard() {
    return $$(".card")[0];
  }
  get formsCard() {
    return $$(".card")[1];
  }
  get alertsCard() {
    return $$(".card")[2];
  }
  get widgetsCard() {
    return $$(".card")[3];
  }
  get interactionsCard() {
    return $$(".card")[4];
  }
  get bookStoreCard() {
    return $$(".card")[5];
  }
  get mainHeaderOfEntity() {
    return $$(".main-header")[0];
  }
}

module.exports = new HomePage();
