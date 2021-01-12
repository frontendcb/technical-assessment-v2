// Namespace 
const checkoutScripts = {};

checkoutScripts.addCurrencySymbol = () => {
  let currencyFields = $('.currency');
  [...currencyFields].forEach(currencyField => {
    let priceText = $(currencyField).text();
    $(currencyField).text('$' + priceText);
  })
}

$(document).ready(() => {
  checkoutScripts.addCurrencySymbol();
});