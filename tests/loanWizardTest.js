var home
var fillup = (pageObjects,data)=>{
    home
        // .click('@drop1')
        .click(data)
        .pause(3000)
        .click('@next')
        .setValue('@city', data)
        .click('@next')
        
        // .click(data)
}
module.exports = {
    beforeEach: browser => {
        home = browser.page.loanWizardPage()
        home.navigate()
    },
    after: browser => {
        home.end()
    },
    'doit': browser =>{
        fillup(home)
    }
}
