class App {
  async openHomePage() {
    await browser.url("https://demoqa.com/");
  }
  async openLoginPage() {
    await browser.url("https://demoqa.com/login");
  }
  async openBookStorePage() {
    await browser.url("https://demoqa.com/books");
  }
}

module.exports = new App();
