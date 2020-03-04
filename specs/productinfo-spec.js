let envData = require('../resources/data/EnvDetails.json')
let SelectionData = require('../resources/data/SelectionData.json')
let homepage = require('../pages/homepage')
let productdetailspage = require('../pages/productdetailspage')
let itemdetailspage = require('../pages/itemdetailspage')
describe('Science category first book deatils', () => {
    beforeAll(() => { // b4 suite
        browser.waitForAngularEnabled(false)
        browser.get(envData['data'][0]['URL'])

    })
    it('Searching for Science in book department test', () => {
        for (const data of SelectionData.data) {
            homepage.searchforproduct(data.Department, data.Section)
        }
    })


    it('Printng all the details of the first book item from searched list', async () => {
        await productdetailspage.firstproductdetails()
        
    })

    it('Printng first book details test', async () => {        
        await itemdetailspage.itemfulldetails()
    })

})









