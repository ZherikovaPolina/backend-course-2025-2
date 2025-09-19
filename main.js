let currency = "jpy";
let exact_date = "20240127";

const myURL = new URL('NBU_Exchange/exchange_site', 'https://bank.gov.ua/');

myURL.searchParams.append('date', exact_date);
myURL.searchParams.append('valcode', currency);
myURL.searchParams.append('json', '');

console.log(myURL.href);