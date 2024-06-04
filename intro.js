var currencyone = 100;
var currencytwo = 80;
var currencyrate = 9;
function convertcurrency(amount,rate){
    return amount*rate;
}
currencytwo= convertcurrency(currencyone, currencyrate);
console.log(currencytwo);