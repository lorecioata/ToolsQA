const chai = require("chai");
const expect = chai.expect;
const App = require("../test/pageobjects/App");
const HomePage = require("../test/pageobjects/HomePage");

describe("Check Home Page smoke tests functionality", () => {
  it("Check if page opens and ToolsQA logo appears", async () => {
    await App.openHomePage();
    await (await HomePage.logoImg).waitForDisplayed();
    await expect(await (await HomePage.logoImg).isDisplayed()).to.be.true;
  });
  it("Check if all the six entities can be viewed on Home Page", async () => {
    const elementsCard = await (await HomePage.elementsCard).getText();
    await expect(await elementsCard).contains("Elements");

    const formsCard = await (await HomePage.formsCard).getText();
    await expect(await formsCard).contains("Forms");

    const alertsCard = await (await HomePage.alertsCard).getText();
    await expect(await alertsCard).contains("Alerts, Frame & Windows");

    const widgetsCard = await (await HomePage.widgetsCard).getText();
    await expect(await widgetsCard).contains("Widgets");

    const interactionsCard = await (await HomePage.interactionsCard).getText();
    await expect(await interactionsCard).contains("Interactions");

    const bookStoreCard = await (await HomePage.bookStoreCard).getText();
    await expect(await bookStoreCard).contains("Book Store Application");
  });

  it("Check if all the entities can be accessed on HomePage", async () => {
    await (await HomePage.elementsCard).click();
    var elementsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    await expect(await elementsHeader).contains("Elements");

    await browser.url("https://demoqa.com/");

    await (await HomePage.formsCard).click();
    var formsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    await expect(await formsHeader).contains("Forms");

    await browser.url("https://demoqa.com/");

    await (await HomePage.alertsCard).click();
    var alertsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    await expect(await alertsHeader).contains("Alerts, Frame & Windows");

    await browser.url("https://demoqa.com/");

    await (await HomePage.widgetsCard).click();
    var widgetsHeader = await (await HomePage.mainHeaderOfEntity).getText();
    await expect(await widgetsHeader).contains("Widgets");

    await browser.url("https://demoqa.com/");

    await (await HomePage.interactionsCard).click();
    var interactionsHeader = await (
      await HomePage.mainHeaderOfEntity
    ).getText();
    await expect(await interactionsHeader).contains("Interactions");

    await browser.url("https://demoqa.com/");

    await (await HomePage.bookStoreCard).click();
    var bookStoreHeader = await (await HomePage.mainHeaderOfEntity).getText();
    await expect(await bookStoreHeader).contains("Book Store");
  });
});
