function numberType(number){
    let result;
    if(number>0)
    {
        console.log(`${number} number is positive`);
    }
    else if(number==0)
    {
        console.log(`${number} number is zero`);
    }
    else{
        console.log(`${number} number is negative`);
    }
    return result;
}
numberType(78);