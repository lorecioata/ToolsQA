import Base from './Base'

class HomePage extends Base {
    get ToolsQaImg() { return $('img') }

    get h5_Elements() { return $('h5=Elements') }
    get h5_Forms() { return $('h5=Forms') }
    get h5_AFW() { return $('h5=Alerts, Frame & Windows') }
    get h5_Widgets() { return $('h5=Widgets') }
    get h5_Interactions() { return $('h5=Interactions')}
    get h5_BookStoreApp() { return $('h5=Book Store Application')}

    get MainHeader1() { return $('.main-header=Elements')}
    get MainHeader2() { return $('.main-header=Forms')}
    get MainHeader3() { return $('.main-header=Alerts, Frame & Windows')}
    get MainHeader4() { return $('.main-header=Widgets')}
    get MainHeader5() { return $('.main-header=Interactions')}
    get MainHeader6() { return $('.main-header=Book Store')}

    ToolsQaImgIsVisible(){ 
        this.ToolsQaImg.waitForExist()
    }
    ElementsEntityIsVisible() { this.h5_Elements.waitForExist() }
    ElementsEntityClick(){
        browser.execute( async() => {
            document.querySelectorAll('.card')[0].click()
            //let card = await $$('.card mt-4 top-card')[0]
            //await card.click()
        })
    }

    FormsEntityIsVisible() { this.h5_Forms.waitForExist() }
    FormsEntityClick() { 
        browser.execute( async() =>  {
            document.querySelectorAll('.card')[1].click()
            //await $$('.card')[1].click()
        })
    }

    AFWEntityIsVisible() { this.h5_AFW.waitForExist()}
    AFWEntityClick() {
        browser.execute( async() =>  {
            document.querySelectorAll('.card')[2].click()
            //await $$('.card')[2].click()
        })
    }
    WidgetsEntityIsVisible() { this.h5_Widgets.waitForExist() }
    WidgetsEntityClick() { 
        browser.execute( async() =>  {
            document.querySelectorAll('.card')[3].click()
            //await $$('.card')[3].click()
        })
    }
    InteractionsEntityisVisible() { this.h5_Interactions.waitForExist() }
    InteractionsEntityClick() {
        browser.execute( async() =>  {
            document.querySelectorAll('.card')[4].click()
            //await $$('.card')[4].click()
        })
    }
    BookStoreAppEntityisVisible() { this.h5_BookStoreApp.waitForExist() }
    BookStoreAppEntityClick() { 
        browser.execute( async() =>  {
            document.querySelectorAll('.card')[5].click()
            //await $$('.card')[5].click()
        })
    }
    MainHeaderisVisible(){
        this.MainHeader1.waitForExist()
    }
}

export default new HomePage()