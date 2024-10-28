const searchAction = require("../pages/search/searchAction");
const addToCartAction = require("../pages/addToCart/addToCartActions");
const checkoutAction= require("../pages/checkout/checkoutActions");
const utility = require("../Utilities/utility");

var productName="";
var productQty;
var singleProductPrice;

describe("Demo Evershop site product purchase journey",()=>{
    it("should able to successfully search product", async()=>{
        const productIndex=await utility.randomNumber(1,4);
        productName=await searchAction.selectedProduct(productIndex);
        await searchAction.clickOnSearchIcon();
        await searchAction.enterSearchItemName(productName);
        await browser.keys("Enter");
    });
    it("should able to successfully add product to cart", async()=>{
        await addToCartAction.clickOnProductFromList(productName);
        await addToCartAction.selectProductSize();
        await addToCartAction.selectColor();
        singleProductPrice=await addToCartAction.getSingleProductPrice();
        productQty=await utility.randomNumber(3,8);
        await addToCartAction.enterProductQty(productQty);
        
        await addToCartAction.clickOnAddToCart();
        await addToCartAction.clickOnViewCart();
    });
    it("should successfully verify amount and grand total amount", async()=>{
        const expectedTotalPrice=productQty*singleProductPrice;
        const actualSubTotal= await checkoutAction.getSubTotalAmount();
        const actualGrandTotal=await checkoutAction.getGrandTotalAmount();
        expect(expectedTotalPrice).toEqual(actualSubTotal);
        expect(expectedTotalPrice).toEqual(actualGrandTotal);

    })

})