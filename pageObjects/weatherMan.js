module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        searchBar: {
            selector: '.enter-location__input',
        },
        submitCity:{
            selector: '.enter-location__submit'
        },
        resultCity: {
            selector: '//h3[@class="current-weather__location"]',
            locateStrategy: 'xpath'
        },
        errorMessage: {
            selector: '//h3[@class="error-message__message"]',
            locateStrategy: 'xpath'
        }
    }
}