var weatherPage
var searchWeather = (weatherPage, search, result) => {
    weatherPage
        .setValue('@searchBar', search)
        .click('@submitCity')
        .waitForElementPresent('@resultCity')
        .verify.containsText('@resultCity', result)
        .api.back()
}
var invalidSearch = (weatherPage, search, result) =>{
weatherPage
    .setValue('@searchBar', search)
    .click('@submitCity')
    .waitForElementPresent('@errorMessage')
    .verify.containsText('@errorMessage', result)
    .api.back()

}
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherMan()
        weatherPage.navigate()
    },
    'Search for city': browser => {
        var cityInfo = {
            search: 'San Diego',
            result: 'San Diego'
        }
        // weatherPage
        searchWeather(weatherPage, cityInfo.search, cityInfo.result)
        // .setValue('@searchBar', ['San Diego', browser.Keys.ENTER])
        // .waitForElementPresent('@resultCity')
        // .expect.element('@resultCity').text.to.equal('San Diego')
    },
    'Search for zip': browser => {
        var cityInfo = {
            search: '95820',
            result: 'Sacramento'
        }
        weatherPage
        searchWeather(weatherPage, cityInfo.search, cityInfo.result)
        // .setValue('@searchBar', ['95820', browser.Keys.ENTER])
        // .waitForElementPresent('@resultCity')
        // .expect.element('@resultCity').text.to.equal('Sacramento')
    },
    'Search for blank': browser => {
        var cityInfo = {
            search: '',
            result: 'There was a problem fetching the weather!'
        }
        invalidSearch(weatherPage, cityInfo.search, cityInfo.result)
        // .setValue('@searchBar', ['', browser.Keys.ENTER])
        // .waitForElementPresent('@errorMessage')
        // .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    },
    'Search for bad zip': browser => {
        weatherPage
            .setValue('@searchBar', ['123456789', browser.Keys.ENTER])
            .waitForElementPresent('@errorMessage')
            .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    },
    // 'Search again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '95820')
    //         .click('@searchButton')
    //         .waitForElementPresent('@resultCity')
    //         .click('@searchAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // },
    // 'Try again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '')
    //         .click('@searchButton')
    //         .waitForElementPresent('@errorMessage')
    //         .click('@tryAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // }
}