var home
var inputs = require('../testAssets/wizardTestAssets')
module.exports = {
    beforeEach: browser => {
        home = browser.page.loanWizardPage()
        home.navigate()
    },
    after: browser => {
        home.end()
    },
    'doit': browser => {
        home
        inputs.forEach(test => {
            home.Wizard(test)
        })
    }
}
