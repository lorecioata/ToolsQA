import Base from './Base'

class HomePage extends Base {
    get ToolsQaImg() { return $('img') }
    get h5() { return $('h5')}
    get ElementsEntity() { return $('#app > div > div > div.home-body > div > div:nth-child(1)') }
    get FormsEntity() { return $('#app > div > div > div.home-body > div > div:nth-child(2)') }
    get AFWEntity() { return $('#app > div > div > div.home-body > div > div:nth-child(3)') } 
    get WidgetsEntity() { return $('#app > div > div > div.home-body > div > div:nth-child(4)') }
    get InteractionsEntity() { return $('#app > div > div > div.home-body > div > div:nth-child(5)') }
    get BookStoreAppEntity() { return $('#app > div > div > div.home-body > div > div:nth-child(6)') }
    get MainHeader() { return  $('.main-header')}
    ToolsQaImgIsVisible(){ 
        this.ToolsQaImg.waitForExist()
    }
    ElementsEntityIsVisible(){
        this.ElementsEntity.waitForExist()
    }
    FormsEntityIsVisible(){
        this.FormsEntity.waitForExist()
    }
    AFWEntityIsVisible(){
        this.AFWEntity.waitForExist()
    }
    WidgetsEntityIsVisible()
    {
        this.WidgetsEntity.waitForExist()
    }
    InteractionsEntityisVisible()
    {
        this.InteractionsEntity.waitForExist()
    }
    BookStoreAppEntityisVisible()
    {
        this.BookStoreAppEntity.waitForExist()
    }
}

export default new HomePage()
