const { expect } = require("chai");
const cards = require("../testData/homePageCards");
const cardsNames = require("../testData/cardsNames");
const App = require("../test/pageobjects/App");
const HomePage = require("../test/pageobjects/HomePage");

describe("Check Home Page smoke tests functionality", () => {
  beforeEach(async () => {
    await App.openHomePage();
    if (await App.ad.isDisplayed()) {
      await App.removeAd();
    }
  });
  it("Check if page opens and ToolsQA logo appears", async () => {
    await (await HomePage.logoImg).waitForDisplayed();
    expect(await (await HomePage.logoImg).isDisplayed()).to.be.true;
  });
  it("Check if all the six entities can be viewed on Home Page", async () => {
    let cardsArray = await HomePage.cards();
    for (i = 0; i < cardsArray.length; i++) {
      expect(await cardsArray[i].getText()).contains(cardsNames[i]);
    }
  });

  it("Check if all the entities can be accessed on HomePage", async () => {
    let cardsArray = await HomePage.cards();
    await cardsArray[0].click();
    let elementsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(elementsHeader).contains(cards.Elements);
    await browser.back();

    await cardsArray[1].click();
    let formsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(formsHeader).contains(cards.Forms);
    await browser.back();

    await cardsArray[2].click();
    let alertsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(alertsHeader).contains(cards.Alerts);
    await browser.back();

    await cardsArray[3].click();
    let widgetsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(widgetsHeader).contains(cards.Widgets);
    await browser.back();

    await cardsArray[4].click();
    let interactionsHeader = await (
      await HomePage.mainHeaderOfEntity
    ).getText();
    expect(interactionsHeader).contains(cards.Interactions);
    await browser.back();

    await cardsArray[5].click();
    let bookStoreHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(bookStoreHeader).contains(cards.BookStore);
    await browser.back();
  });
});
