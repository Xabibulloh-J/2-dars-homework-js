var dollarExchangeRate = 12.600;
var euroExchangeRate = 13.400;

var travelTicketPrice = 500;
var hotelPrice = 250;
var museumPrice = 120;

var userMoney = Number(prompt("Sayohat uchun sarflaydigan pulingizni kiriting:"));


if((dollarExchangeRate.toFixed(3)*(travelTicketPrice+hotelPrice)+euroExchangeRate.toFixed(3)*museumPrice) <= userMoney){
   console.log("Sayohat uchun pulingiz yetadi, oq yo'l!");
} else {
   console.log("Sayohat uchun pulingiz yetmaydi, biroz pul yeg'ing!");
}