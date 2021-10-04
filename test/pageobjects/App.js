class App {
  get ad() {
    return $("#adplus-anchor");
  }
  async openHomePage() {
    await browser.url("https://demoqa.com/");
  }
  async openLoginPage() {
    await browser.url("https://demoqa.com/login");
  }
  async openBookStorePage() {
    await browser.url("https://demoqa.com/books");
  }
  async openProfilePage() {
    await browser.url("https://demoqa.com/profile");
  }
  async removeAd() {
    await browser.execute(() => {
      const adToRemove = document.querySelector("#adplus-anchor");
      adToRemove.remove();
    });
  }
  async scrollAndWaitForDisplayed(item) {
    await (await item).scrollIntoView();
    await (await item).waitForDisplayed();
  }
}

module.exports = new App();
