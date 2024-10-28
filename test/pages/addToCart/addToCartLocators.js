class AddtoCartLocators{
    async productFromList(productName){
        return $(`//a[contains(@href,'')]/span[contains(text(),'${productName}')]`)
    }
    get productSize(){
        return $("(//ul[contains(@class,'variant-option-list')]/li)[1]")
    }
    get productColor(){
        return $("//a[@href='#' and contains(text(),'Black')]")
    }
    get inputQty(){
        return $("//input[@name='qty']")
    }
    get btnAddToCart(){
        return $("//span[contains(text(),'ADD TO CART')]")
    }
    get btnViewCart(){
        return $("//a[contains(text(),'VIEW CART')]")
    }
    get priceFromProductPage(){
        return $("//span[@class='sale-price']");
    }
}
module.exports=new AddtoCartLocators();