let productsearch=function(){
    

    this.searchproduct=function(dropdown,searchbox,department ,value){
        dropdown.click()
        element(by.xpath('//select[@id="searchDropdownBox"]/option[text()="'+department+'"]')).click()
        searchbox.sendKeys(value)
        $('input[type="submit"]').click()
    }

}
module.exports=new productsearch()