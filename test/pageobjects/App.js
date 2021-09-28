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
  async openProfilePage() {
    await browser.url("https://demoqa.com/profile");
  }
}

module.exports = new App();
