class App {
    openHomePage() { browser.url("https://demoqa.com/") }
    openLoginPage() {  browser.url("https://demoqa.com/login") }
    openBookStorePage() {  browser.url("https://demoqa.com/books") }
}
export default new App()