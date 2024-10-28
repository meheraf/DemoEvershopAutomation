const searchLocators =require("./searchLocator");

class SearchAction{
    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }
    async enterSearchItemName(productName){
        await searchLocators.searchInputField.setValue(productName);
    }
    async selectedProduct(prductIndex){
       return await searchLocators.selectedProduct(prductIndex).getText();
    }

}
module.exports=new SearchAction();