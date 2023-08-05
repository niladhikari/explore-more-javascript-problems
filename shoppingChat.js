const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 3 },
];

function totalCost(product) {
    let sum = 0;
    for (let i = 0; i < product.length; i++) {
        const element = product[i];
        let producttotal = element.price * element.quantity;
        sum = sum + producttotal;
    }
    return sum;
}
let totalProductCost = totalCost(shoppingCart);
console.log('Total Shopping Cost:',totalProductCost);
