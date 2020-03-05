let productdetailspage=require('./productdetailspage')
let itemdetailspage = function () {
    
    let title_ele = element(by.id('booksTitle'))
    let authordetails_ele = element(by.id('bylineInfo'))
    let ratingusers_ele = element(by.id('averageCustomerReviews_feature_div'))
    let tagelements_ele = $$('#tmmSwatches ul > li span.a-list-item a.a-button-text[href]>span')
    
    //Printing the Book information after clicking on the first item
    this.itemfulldetails = async function () {
        productdetailspage.clickonfirstpage()
        let title = await title_ele.getAttribute('innerText')
        let authordetails = await authordetails_ele.getAttribute('innerText')
        let ratingusers = await ratingusers_ele.getAttribute('innerText')
        console.log('..................................')
        console.log('Title  :' + title)
        console.log('author : ' + authordetails)
        console.log('rating details : ' + ratingusers)
        let tagelemets_count = await tagelements_ele.count()
        console.log(tagelemets_count)
        for (let i = 0; i < tagelemets_count; i++) {
            let tag = await tagelements_ele.get(i).getText()
            console.log(tag)
        }


    }



}
module.exports = new itemdetailspage()
