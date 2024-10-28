class SearchLocators{
    get searchIcon(){
        return $("//a[@class='search-icon']");
    }
    get searchInputField(){
        return $("//input[@placeholder='Search']")
    }
    selectedProduct(productIndex){
        return $(`(//div[contains(@class,'product-name')])[${productIndex}]`)
    }

}
module.exports=new SearchLocators();