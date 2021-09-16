module.exports = class Base {
  pauseShort() {
    it("browser short", async () => {
      await browser.pause(3000);
    });
  }
  pauseMedium() {
    it("browser medium", async () => {
      await browser.pause(5000);
    });
  }
  pauseLong() {
    it("browser long", async () => {
      await browser.pause(8000);
    });
  }
};
