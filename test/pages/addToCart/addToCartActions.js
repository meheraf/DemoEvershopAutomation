const addToCartLocator = require("./addToCartLocators");
const utility=require("../../Utilities/utility");
class AddToCartAction{
    async clickOnProductFromList(productName){
        await (await addToCartLocator.productFromList(productName)).click();
    }
    async selectProductSize(){
        await addToCartLocator.productSize.click();
        await browser.pause(4000);
    }
    async selectColor(){
        await addToCartLocator.productColor.click();
        await browser.pause(4000);
    }
    async enterProductQty(qty){
        await addToCartLocator.inputQty.setValue(qty);
    }
    async clickOnAddToCart(){
        await addToCartLocator.btnAddToCart.click();
    }
    async clickOnViewCart(){
        await addToCartLocator.btnViewCart.click();
    }
    async getSingleProductPrice(){
        const productPrice = await addToCartLocator.priceFromProductPage.getText();
        const productPriceNumber= await utility.convertTextToNumber(productPrice);
        return productPriceNumber;
    }
}
module.exports=new AddToCartAction();