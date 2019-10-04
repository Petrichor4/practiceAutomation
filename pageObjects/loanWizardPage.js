var myCommands = {
    Wizard: function (data) {
        this
            .click('@drop1')
            .click(data.drop1)
            .click('@drop2')
            .click(data.drop2)
            .click('@next')
            .setValue('@city', data.city)
            .click('@next')
            .click(data.prop)
            .click(data.idk)
            .click(data.idk2)
            .setValue('@pp', data.pp)
            .setValue('@dp', data.dp)
            .click('@next')
            .click(data.credit)
            .click(data.seven)
            .setValue('@street1', data.street)
            .setValue('@city2', data.city2)
            .click('@next')
            .setValue('@fname', data.fname)
            .setValue('@lname', data.lname)
            .setValue('@email', data.email)
            .click('@next')
            .verifyForm(data)
            .click('@restart')
            .click('@next')
            .pause(1500)
        return this

    },
    verifyForm: function (inputs) {
        this
            .verify.containsText('[class="name p2"]', inputs.fname + inputs.lname)
            .verify.containsText('[class="email p2"]', inputs.email)
            .verify.containsText('[class="loanType p2"]', inputs.drop1res)
            .verify.containsText('[class="propertyType p2"]', inputs.drop2res)
            .verify.containsText('[class="city p2"]', inputs.city)
            .verify.containsText('[class="propertyPurpose p2"]', inputs.propres)
            .verify.containsText('[class="found p2"]', inputs.idkres)
            .verify.containsText('[class="agent p2"]', inputs.idk2res)
            .verify.containsText('[class="price p2"]', inputs.pp)
            .verify.containsText('[class="downPayment p2"]', inputs.dp)
            .verify.containsText('[class="creditScore p2"]', inputs.creditres)
            .verify.containsText('[class="creditHistory p2"]', inputs.sevenres)
            .verify.containsText('[class="p2"]', inputs.city2)
        return this
    }
}
module.exports = {
    url: 'http://localhost:3000/#/wOne',
    commands: [myCommands],
    elements: {
        drop1: '#loanTypes',
        home: '[value="Home Purchase"]',
        ref: '[value="Refinance"]',
        homeQ: '[value="Home Equity"]',
        drop2: '#propertyTypes',
        single: '[value="Single Family Home"]',
        town: '[value="Town Home"]',
        condo: '[value="Condo"]',
        multif: '[value="Multi Family Dwelling"]',
        mobile: '[value="Mobile Home"]',
        PH: '[value="Primary Home"]',
        RP: '[value="Rental Property"]',
        SH: '[value="Secondary Home"]',
        yes: '[name="yesButton"]',
        no: '[name="noButton"]',
        next: '[name="nextButton"]',
        city: '[name="city"]',
        pp: '[name="price"]',
        dp: '[name="down"]',
        poor: '[value="poor"]',
        fair: '[value="fair"]',
        good: '[value="good"]',
        excellent: '[value="excellent"]',
        hasnt: '[value="Has never been in bankruptcy"]',
        hasb: '[value="Has had bankruptcy before"]',
        fore: '[value="Has had a foreclosure before"]',
        both: '[value="Has had both a foreclosure and a bankruptcy"]',
        street1: '#addressOne',
        street2: '#addressTwo',
        city2: '#addressThree',
        fname: '#first',
        lname: '#last',
        email: '#email',
        form: {
            selector: '//div[@class="form"]',
            locateStrategy: 'xpath'
        },
        restart: '[name="restartButton"]'
    }
}