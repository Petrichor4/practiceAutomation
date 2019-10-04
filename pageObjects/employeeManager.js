var employ = {
    employeeChange: function (){},
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    commands: [employ],
    elements: {
        pleb: '[name="employee1"]',
        name: '[name="nameEntry"]',
        phone: '[name="phoneEntry"]',
        title: '[name="titleEntry"]',
        save: '[name="save"]',
        cancel: '[name="cancel"]',
        addemployee: '[name="addEmployee"]',
        id: '[name="employeeID"]',
        redline: '//input[class="materialInput invalidInfo"]',
        locateStrategy: 'Xpath'
    }
}