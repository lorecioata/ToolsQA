class LoginLogout {
  get loginUserName() {
    return $("#userName");
  }
  get loginPassword() {
    return $("#password");
  }
  get loginButton() {
    return $("#login");
  }
  get loggedInUserName() {
    return $("#userName-value");
  }
  get logoutButton() {
    return $("#submit");
  }
  get welcomeMsg() {
    return $("#userForm");
  }
  get alreadyLoggedIn() {
    return $("#loading-label");
  }
  async loginWithValidData() {
    await this.loginUserName.waitForDisplayed();
    await this.loginPassword.waitForDisplayed();
    await this.loginButton.waitForDisplayed();
    await this.loginUserName.clearValue();
    await this.loginUserName.addValue("test_1");
    await this.loginPassword.clearValue();
    await this.loginPassword.addValue("Testpass1@");
    await this.loginButton.click();
  }
}
module.exports = new LoginLogout();
