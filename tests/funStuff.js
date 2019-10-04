module.exports = {
    'Open in a new window': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
            .waitForElementPresent('#tryhome')
            .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'On original window')
            .frame('iframeResult')
            .click('a')
            .windowHandles(results => {
                var originalWindow = results.value[0]
                    browser.switchWindow(results.value[1])
                    //...
                    .verify.urlEquals('https://www.w3schools.com/', 'In new one')
                    .switchWindow(originalWindow)
                    .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'Back to old')
                    .closeWindow()
                    .windowHandles(results => {
                        var handles = results.value
                        browser.verify.ok(handles.length === 1, "there is only one window open.")
                            .switchWindow(results.value[0])
                            .verify.urlEquals('https://www.w3schools.com/', 'And it is the new one')
                    })
                    .end()
            })
    }
}