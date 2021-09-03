import App from "../test/pageobjects/App.js"
import HomePage from "../test/pageobjects/HomePage.js"

describe('Smoke Testing', () => {
    it('Check if page opens and ToolsQA logo appears', async () => {
        App.openHomePage()
        HomePage.ToolsQaImgIsVisible()
    });
    it.skip('Check if all the six entities can be viewed on Home Page', async () => {
        HomePage.ElementsEntityIsVisible()
        const h5_1 = await HomePage.h5_Elements
        await expect(h5_1).toHaveText('Elements')

        HomePage.FormsEntityIsVisible()
        const h5_2 = await HomePage.h5_Forms
        await expect(h5_2).toHaveText('Forms')

        HomePage.AFWEntityIsVisible()
        const h5_3 = await HomePage.h5_AFW
        await expect(h5_3).toHaveText('Alerts, Frame & Windows')

        HomePage.WidgetsEntityIsVisible()
        const h5_4 = await HomePage.h5_Widgets
        await expect(h5_4).toHaveText('Widgets')

        HomePage.InteractionsEntityisVisible()
        const h5_5 = await HomePage.h5_Interactions
        await expect(h5_5).toHaveText('Interactions')

        HomePage.BookStoreAppEntityisVisible()
        const h5_6 = await HomePage.h5_BookStoreApp
        await expect(h5_6).toHaveText('Book Store Application')
    });

    it('Check if all the entities can be accessed on HomePage', async () => {
        HomePage.ElementsEntityIsVisible()
        HomePage.ElementsEntityClick()
        const mainheader1 = await HomePage.MainHeader1
        await expect(mainheader1).toHaveText('Elements')
        
        App.openHomePage()

        HomePage.FormsEntityIsVisible()
        HomePage.FormsEntityClick()
        const mainheader2 = await HomePage.MainHeader2
        await expect(mainheader2).toHaveText('Forms')

        App.openHomePage()

        HomePage.AFWEntityIsVisible()
        HomePage.AFWEntityClick()
        const mainheader3 = await HomePage.MainHeader3
        await expect(mainheader3).toHaveText('Alerts, Frame & Windows')

        App.openHomePage()

        HomePage.WidgetsEntityIsVisible()
        HomePage.WidgetsEntityClick()
        const mainheader4 = await HomePage.MainHeader4
        await expect(mainheader4).toHaveText('Widgets')

        App.openHomePage()

        HomePage.InteractionsEntityisVisible()
        HomePage.InteractionsEntityClick()
        const mainheader5 = await HomePage.MainHeader5
        await expect(mainheader5).toHaveText('Interactions')

        App.openHomePage()

        HomePage.BookStoreAppEntityisVisible()
        HomePage.BookStoreAppEntityClick()
        const mainheader6 = await HomePage.MainHeader6
        await expect(mainheader6).toHaveText('Book Store')

    });


});