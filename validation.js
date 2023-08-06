function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add("12, 45");
// console.log(result);

function multiply(number){
   if (!Array.isArray(number)) {
       return 'please give me a array'
   }
    let result = 1;
   for (let i = 0; i < number.length; i++) {
       const element = number[i];
       result = result * element;
   }
    return result;
}

const numbers = [3,6,2,4];
let output = multiply(numbers);
console.log('Numbers Multipication is :',output);
