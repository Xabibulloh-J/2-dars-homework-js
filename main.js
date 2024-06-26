var dollarExchangeRate = 12600;
var euroExchangeRate = 13400;

var travelTicketPrice = 500;
var hotelPrice = 250;
var museumPrice = 120;

var userMoney = Number(prompt("Sayohat uchun sarflaydigan pulingizni kiriting:"));


if((dollarExchangeRate*(travelTicketPrice+hotelPrice)+euroExchangeRate*museumPrice) <= userMoney){
   console.log("Sayohat uchun pulingiz yetadi, oq yo'l!");
} else {
   console.log("Sayohat uchun pulingiz yetmaydi, biroz pul yeg'ing!");
}