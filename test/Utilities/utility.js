class Utility{
    
    async convertTextToNumber(text){
        const value=parseFloat(text.replace(/[$,]/g, ""));
        return value;
    };
    async randomNumber(min,max){
       const randomValue= Math.floor(Math.random()*(max-min+1))+min;
       return randomValue;
    }
}
module.exports=new Utility();
