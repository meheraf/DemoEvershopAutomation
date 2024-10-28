function convertToNumber(){
    const text="$7,18.15";
    const convertToSimpleNumber=parseFloat(text.replace(/[$,]/g, ""));
    
    console.log(typeof convertToSimpleNumber)
}
convertToNumber();