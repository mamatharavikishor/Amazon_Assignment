let productdetailspage = function () {
    let productname_ele = $(".s-result-list div[data-index='0'] h2")
    let author_ele = element.all(by.xpath('(//a[@class="a-size-base a-link-normal"])'))
    let date_ele =  element.all(by.xpath('(//span[@class="a-size-base a-color-secondary a-text-normal"])'))
    let used_ele =  element.all(by.xpath('(//span[@class="a-letter-space"]/following-sibling::a)'))
    let rating_ele =  $(".s-result-list div[data-index='0'] i >span")
    let users_ele =  $(".s-result-list div[data-index='0'] span[aria-label]:nth-child(2) span")
    let handcovertags_ele = $$(".s-result-list div[data-index='0'] a.a-text-bold")
    let handcoverpricetags_ele = $$(".s-result-list div[data-index='0'] a > span > span.a-offscreen")
    //Printing the first book details after search
    this.firstproductdetails = async function () {
        let bookName = await productname_ele.getText()
        let authorName = await author_ele.get(0).getText()
        let date = await date_ele.get(0).getText()
        let used = await used_ele.get(0).getText()
        let rating = await rating_ele.getAttribute('innerText')
        let users = await users_ele.getText()
        console.log('..............................')
        console.log('produt name: ' + bookName)
        console.log('author : ' + authorName)
        console.log('date :' + date)
        console.log('rating : ' + rating)
        console.log('users : ' + users)

        let count = await handcovertags_ele.count()
        for (let i = 0; i < count; i++) {
            let tagName = await handcovertags_ele.get(i).getAttribute('innerText')
            let tagName1 = await handcoverpricetags_ele.get(i).getAttribute('innerText')
            let tagName2 = await handcoverpricetags_ele.get(i + 1).getAttribute('innerText')
            console.log(tagName);
            console.log(tagName1)
            console.log(tagName2)
        }


    }

}
module.exports = new productdetailspage();