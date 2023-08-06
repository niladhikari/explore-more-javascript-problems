/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function totalTicketPrice(ticketQuantity) {
  const first100Price = 100;
  const second200Price = 90;
  const restTicketPrice = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Price;
    return price;
  } 
  else if (ticketQuantity <= 200) {
    const ticketPrice = 100 * first100Price; // 1st 100 ticket price
    const restQuantity = ticketQuantity - 100; // ticket jodi 150 hoy...tahole 50 ta thakbe
    const restTicketPrice = restQuantity * second200Price; // oi 50 tar price 90 taka kore
    const totalTicketPrice = ticketPrice + restTicketPrice; // 1st 100 price + baki 50 price
    return totalTicketPrice;
  } 
  else {
    const ticket100Price = 100 * first100Price;  // 1 por theke 100 porjonto gula 90 taka kore
    const ticket200Price = 100 * second200Price;  //100 por theke 200 porjonto gula 90 taka kore
    const restQuantity = ticketQuantity - 200;  // ticket jodi 250 hoy...tahole 50 ta thakbe
    const TicketPrice = restQuantity * restTicketPrice; // oi 50 tar price 90 taka kore
    const totalTicketPrice = ticket200Price + TicketPrice +ticket100Price;
    // 1st 100*100 price + 2ns 100*90 price + baki 50*70 price
    return totalTicketPrice;
  }
}
const tickeTotalCost = totalTicketPrice(202);
console.log(tickeTotalCost);
