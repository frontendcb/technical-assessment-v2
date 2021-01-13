// Namespace 
const checkoutScripts = {};

// Add currency symbol to price text
// Parameter: takes an array of one or more jQuery objects
checkoutScripts.addCurrencySymbol = (currencyElements) => {
  [...currencyElements].forEach(currencyElement => {
    let priceText = $(currencyElement).text();
    $(currencyElement).text('$' + priceText);
  })
}

$(document).ready(() => {
  // Get all currency elements on the page as jQuery objects
  let currencyFields = $('.currency');
  
  checkoutScripts.addCurrencySymbol(currencyFields);
});