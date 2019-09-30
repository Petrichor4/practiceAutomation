module.exports = {
    beforeEach: browser => {
        browser.url('https://livepickleball.com/#/')
    },
    after: browser => {
        browser.end()
    },
    'using pickle ball site': browser => {
        browser
            .pause(5000)
            .useXpath()
            .verify.containsText('//body', '"Be a part of the action!"')
            .click('(//a[@class="nav-link"])[2]')
            .useCss()
            .setValue('[placeholder="email"]', 'qatest')
            .setValue()
    }
}