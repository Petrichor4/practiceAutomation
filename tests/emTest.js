let manager = {}
// var edit = require('../testAssets/editTest')
module.exports = {
    beforeEach: browser => {
        manager = browser.page.emTestpage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'It can add an employee': browser => {
        // edit(manager, 'Bernice Ortiz', {name:'Karl pfister',phone:'1234567890',title:'good person'}, 'Lou White')
        manager.editTest('Bernice Ortiz', { name: 'Karl pfister', phone: '1234567890', title: 'good person' }, 'Lou White')
    },
}