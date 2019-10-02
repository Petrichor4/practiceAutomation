var searchWeatherCommand = {
    citySearch: function (data) {
        this
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', data.search)
            .click('@submitCity')
            .waitForElementPresent('@resultCity', 10000)
            .verify.containsText('@resultCity', data.result)
            .click('@searchAgain')
        return this
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [searchWeatherCommand],
    elements: {
        searchBar: {
            selector: '.enter-location__input',
        },
        submitCity: {
            selector: '.enter-location__submit'
        },
        resultCity: {
            selector: '//h3[@class="current-weather__location"]',
            locateStrategy: 'xpath'
        },
        errorMessage: {
            selector: '//h3[@class="error-message__message"]',
            locateStrategy: 'xpath'
        },
        searchAgain: {
            selector: '[class="current-weather__search-again"]'
        }
    }
}