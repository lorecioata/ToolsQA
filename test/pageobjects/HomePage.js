import Base from './Base'

class HomePage extends Base {
    get ToolsQaImg() { return $('img') }

    get h5_Elements() { return $('h5=Elements') }
    get h5_Forms() { return $('h5=Forms') }
    get h5_AFW() { return $('h5=Alerts, Frame & Windows') }
    get h5_Widgets() { return $('h5=Widgets') }
    get h5_Interactions() { return $('h5=Interactions')}
    get h5_BookStoreApp() { return $('h5=Book Store Application')}

    get ElementsEntity() { return $('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.avatar.mx-auto.white > svg > path') }
    get FormsEntity() { return $('') }
    get AFWEntity() { return $('') } 
    get WidgetsEntity() { return $('') }
    get InteractionsEntity() { return $('') }
    get BookStoreAppEntity() { return $('') }

    get MainHeader() { return  $('.main-header')}
    ToolsQaImgIsVisible(){ 
        this.ToolsQaImg.waitForExist()
    }
    ElementsEntityIsVisible(){
        this.h5_Elements.waitForExist()
    }
    ElementsEntityClick(){
        this.h5_Elements.click()
    }
    FormsEntityIsVisible(){
        this.h5_Forms.waitForExist()
    }
    AFWEntityIsVisible(){
        this.h5_AFW.waitForExist()
    }
    WidgetsEntityIsVisible()
    {
        this.h5_Widgets.waitForExist()
    }
    InteractionsEntityisVisible()
    {
        this.h5_Interactions.waitForExist()
    }
    BookStoreAppEntityisVisible()
    {
        this.h5_BookStoreApp.waitForExist()
    }
    MainHeaderisVisible(){
        this.MainHeader.waitForExist()
    }
}

export default new HomePage()
