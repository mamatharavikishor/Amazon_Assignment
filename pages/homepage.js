
let homepage = function () {
    let dropdown_ele = element(by.id('searchDropdownBox'))
    let searchbox_ele = element(by.id('twotabsearchtextbox'))
    let submit_ele = $('input[type="submit"][value="Go"]')
    //select books from menu and search for science 
    this.searchforproduct = function (department, section) {
        dropdown_ele.click();
        element(by.xpath('//select[@id="searchDropdownBox"]/option[text()="' + department + '"]')).click()
        searchbox_ele.sendKeys(section)
        submit_ele.click()
    }

}

module.exports = new homepage()