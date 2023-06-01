export const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
    maximumSignificantDigits: 3
  });

export const formatterCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    currencyDisplay: 'narrowSymbol',
    maximumSignificantDigits: 3
  });


const CURRENCY_FACTOR = 4300

export const convertToUSD = (priceInCOP) =>  {
  // return fx(priceInCOP).from("COP").to("USD")
  return priceInCOP / CURRENCY_FACTOR
}

export const convertToCOP = (priceInUSD) =>  {
  return priceInUSD * CURRENCY_FACTOR
}