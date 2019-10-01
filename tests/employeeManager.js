var $$$
// let butt = function ($$$) {
//     $$$
//         .click('[name="employee1"]')
//         .getText('#employeeID', function (result) {
//             let idNumber = Number(result.value.slice(3))
//             $$$
//                 .verify.ok(idNumber > 0, 'The ID (${idNumber})is a positive number.')
//                 .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
//         })
// }
// var clickByText = (browser, text) => {
//     browser
//         .useXpath()
//         .click(`//*[text()="${text}"]`)
//         .useCss()
// }
var employeeChange = (pageObjects, change) => {
    pageObjects
        .click(`li[name="employee${change.number}"]`)
        .waitForElementVisible('#employeeTitle')
        .getText('#employeeTitle', function (result) {
            console.log(result.value)
        })
        .clearValue('@name')
        .setValue('@name', change.name)
        .clearValue('@phone')
        .setValue('@phone', change.phone)
        .clearValue('@title')
        .setValue('@title', change.title)
        .click('@save')
        .click(`li[name="employee${change.number2}"]`)
        .expect.element('#employeeTitle').text.not.equal(change.name)
    pageObjects
        .click(`li[name="employee${change.number}"]`)
        .verify.valueContains('@name', change.name)
        .verify.valueContains('@phone', change.phone)
        .verify.valueContains('@title', change.title)
}
var input = [
    {
        name: 'Karl pfister',
        phone: '1234567890',
        title: 'lord of the class',
        number: '5',
        number2: '8'
    },
    {
        name: 'yomama guller',
        phone: '1234567890',
        title: 'hugger',
        number: '7',
        number2: '3'
    },
    {
        name: 'Karl pfister',
        phone: '1234567890',
        title: 'goodssmanager',
        number: '3',
        number2: '1'
    }


]
module.exports = {
    beforeEach: browser => {
        $$$ = browser.page.employeeManager()
        $$$.navigate()

    },
    after: browser => {
        $$$.end()

    },
    'employeeSelection': browser => {
        var employeeinfo = {
            name: 'Phonemcphoneston',
            phone: '9095559803',
            title: 'AbsoluteUnit'
        },
            employee3 = {
                name: 'Phillip Weaver',
                phone: '7459831843',
                title: 'Manager'
            }
        //     $$$
        //     //testing if the information persists
        //     // .click('[name="employee1"]')
        //     // clickByText(browser, "Bernice Ortiz")
        //     $$$
        //         .verify.containsText('@id', '1')
        //         .clearValue('@name')
        //         .setValue('@name', employeeinfo.name)
        //         .verify.value('@name', employeeinfo.name)
        //         .clearValue('@phone')
        //         .setValue('@phone', employeeinfo.phone)
        //         .verify.value('@phone', employeeinfo.phone)
        //         .clearValue('@title')
        //         .setValue('@title', employeeinfo.title)
        //         .verify.value('@title', employeeinfo.title)
        //         .click('@save')
        //         //verifing the that the save button does not work when it contains invalid information
        //         .click('[name="employee2"]')
        //         .verify.containsText('@id', '2')
        //         .clearValue('@name')
        //         .click('@save')
        //         //bug in the code saves invaid information 
        //         .click('@cancel')
        //         .verify.containsText('@name', 'Marnie Barnett')
        //         .click('[name="employee3"]')
        //         .verify.containsText('@id', '3')
        //         .clearValue('@name')
        //         .setValue('@name', employeeinfo.name)
        //         .verify.value('@name', employeeinfo.name)
        //         .clearValue('@phone')
        //         .setValue('@phone', employeeinfo.phone)
        //         .verify.value('@phone', employeeinfo.phone)
        //         .clearValue('@title')
        //         .setValue('@title', employeeinfo.title)
        //         .verify.value('@title', employeeinfo.title)
        //         .click('@cancel')
        //         .pause(1000)
        //         .verify.value('@name', employee3.name)
        //         .verify.value('@phone', employee3.phone)
        //         .verify.value('@title', employee3.title)
        //         .click('@addemployee')
        //         .click('[name="employee11"]')
        //         //testing the add employee feature
        //         .verify.containsText('@id', '11')
        //         .clearValue('@name')
        //         .setValue('@name', employeeinfo.name)
        //         .verify.value('@name', employeeinfo.name)
        //         .clearValue('@phone')
        //         .setValue('@phone', employeeinfo.phone)
        //         .verify.value('@phone', employeeinfo.phone)
        //         .clearValue('@title')
        //         .setValue('@title', employeeinfo.title)
        //         .verify.value('@title', employeeinfo.title)
        //         .click('@save')
        //         .click('[name="employee1"]')
        //         .verify.value('@name', employeeinfo.name)
        //         .verify.value('@phone', employeeinfo.phone)
        //         .verify.value('@title', employeeinfo.title)
        //         .click('[name="employee11"]')
        //         .verify.value('@name', employeeinfo.name)
        //         .verify.value('@phone', employeeinfo.phone)
        //         .verify.value('@title', employeeinfo.title)
        // },
        // 'Error Test': browser => {
        //     var employee = {
        //         toolong: 'asdfasdfasdfasdfasdfasdfasdfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasf'
        //     }
        //     //bug in the code you can save the name and title field if it just has spaces in it 
        //     $$$
        //         .click('[name="employee1"]')
        //         .clearValue('@name')
        //         .setValue('@name', ' ')
        //         .click('@save')
        //         .verify.elementPresent('@redline')
        // butt($$$)
        input.forEach(test=>{
            employeeChange($$$, test)
        })
        // .pause()
        // testing that the red line does not persist to other employee pages
        //     .api.refresh()
        // $$$
        //     .click('[name="employee1"]')
        //     .setValue('@name', employee.toolong)
        //     .click('@save')
        //     .click('[name="employee2"]')
        //     .verify.elementNotVisible('@redline')
        //     .pause(30000)

    }

}