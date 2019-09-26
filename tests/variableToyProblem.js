module.exports = {
    after: browser => {
        browser.end()
    },
    'Selectors': browser => {
        var searchBar = '.enter-location__input'
        var submitButton = '.enter-location__submit'
        var resultingCity = '.current-weather__location'
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .setValue(searchBar, 'San Diego')
            .click(submitButton)
            .waitForElementVisible(resultingCity)
            .verify.containsText(resultingCity, 'San Diego')
    },
    'Test data': browser => {
        var newEmployeeName = 'Buuf Huskies'
        var newEmployeePhone = '9098785555'
        var newEmployeeTitle = 'Destroyer'
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('li[name="addEmployee"]')
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
    }
}