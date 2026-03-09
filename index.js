import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_MQquDKgx4BUrXT2V1eu6L0fTM21sWFm3xv1rdOQ0');
// convertCurrency("INR","USD",3);
export async function convertCurrency(fromCurrency,toCurrency,units)
{
   const res=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier=res.data[toCurrency];
      const convertedAmount = multiplier * units;

    console.log(convertedAmount);
}

