const initialValue = 500;


const prices = [900, 100, 1900, 4900, 3000];

const totalSum = prices.reduce((initialValue, price) => initialValue * price);
console.log(totalSum);