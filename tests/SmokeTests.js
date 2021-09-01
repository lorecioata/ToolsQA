import App from "../test/pageobjects/App.js"
import HomePage from "../test/pageobjects/HomePage.js"

describe('Smoke Testing', () => {
    it('Check if page opens and ToolsQA logo appears', async () => {
        App.openHomePage()
        HomePage.ToolsQaImgIsVisible()
    });
    it('Check if Elements entity can be viewed on Home Page', async () => {
        HomePage.ElementsEntityIsVisible()
        comst h5=HomePage.h5
        await expect(h5).toHaveText('Elements')
    });
    it('Check if Forms entity can be viewed on Home Page', async () => {
        HomePage.FormsEntityIsVisible()
        var h5=HomePage.h5
        await expect(h5).toHaveText('Forms')
    });
});