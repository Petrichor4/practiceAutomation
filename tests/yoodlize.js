module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com')
    },
    afterEach: browser => {
        browser.end()
    },
    'browsing categories': browser => {
        browser
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Recreational Vehicles')
            .url('https://alpha.yoodlize.com')
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Outdoor Gear')
            .url('https://alpha.yoodlize.com')
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Electronics')
            .url('https://alpha.yoodlize.com')
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Party & Wedding Equipment')
        // .pause()
    },
    'DVD': browser => {
        browser
            .useXpath()
            .setValue('//input[@class="form-control"]', 'DVD')
            .click('//button[@class="sc-uJMKN fpBmEu sc-ifAKCX kvYMhQ"]')
            .click('//div[contains(text(), "Dancing With The Stars: Latin Cardio DVD")]')
            .verify.containsText('//div[@class="sc-bdVaJa iyjQMV"]','Dancing With The Stars: Latin Cardio DVD')
            .pause()
    }
}
