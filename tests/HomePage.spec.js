const { expect } = require("chai");
const cardsNames = require("../objects/homePage");
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
    let cards = await HomePage.cards();
    expect(await cards[0].getText()).contains(cardsNames.Elements);
    expect(await cards[1].getText()).contains(cardsNames.Forms);
    expect(await cards[2].getText()).contains(cardsNames.Alerts);
    expect(await cards[3].getText()).contains(cardsNames.Widgets);
    expect(await cards[4].getText()).contains(cardsNames.Interactions);
    expect(await cards[5].getText()).contains(cardsNames.BookStore);
  });

  it("Check if all the entities can be accessed on HomePage", async () => {
    let cards = await HomePage.cards();
    await cards[0].click();
    let elementsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(elementsHeader).contains(cardsNames.Elements);
    await browser.back();

    await cards[1].click();
    let formsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(formsHeader).contains(cardsNames.Forms);
    await browser.back();

    await cards[2].click();
    let alertsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(alertsHeader).contains(cardsNames.Alerts);
    await browser.back();

    await cards[3].click();
    let widgetsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(widgetsHeader).contains(cardsNames.Widgets);
    await browser.back();

    await cards[4].click();
    let interactionsHeader = await (
      await HomePage.mainHeaderOfEntity
    ).getText();
    expect(interactionsHeader).contains(cardsNames.Interactions);
    await browser.back();

    await cards[5].click();
    let bookStoreHeader = await (await HomePage.mainHeaderOfEntity).getText();
    expect(bookStoreHeader).contains(cardsNames.BookStore);
    await browser.back();
  });
});
