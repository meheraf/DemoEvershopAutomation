const checkoutLocator =require("./checkoutLocators");
const utility=require("../../Utilities/utility");

class CheckoutAction{
    async getSubTotalAmount(){
        const subTotal = await checkoutLocator.subTotal.getText();
        const subTotalNumber= await utility.convertTextToNumber(subTotal);
        return subTotalNumber;
    }
    async getGrandTotalAmount(){
        const grandTotal =await checkoutLocator.grandTotal.getText();
        const grandTotalNumber= await utility.convertTextToNumber(grandTotal);
        return grandTotalNumber;
    }
    async clickOnCheckoutButton(){
        await checkoutLocator.checkoutButton.click(); 
    }

}
module.exports=new CheckoutAction();