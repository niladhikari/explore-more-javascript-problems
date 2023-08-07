function isPrime(num) {
    if (num <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false // If num is divisible by any number between 2 and sqrt(num), it's not prime
      }
    }
  
    return true; // If num is not divisible by any number between 2 and sqrt(num), it's prime
  }
  
  function findPrimeNumbers(arr) {
    let primeNumbers = [];
     let notPrime = [];
    for (let num of arr) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
      else{
        notPrime.push(num)
      }
    }
    
    const numbers ={
        primeNumbers : primeNumbers,
        notPrime : notPrime
    };
    return numbers;
  }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = findPrimeNumbers(numbers);
console.log(primeNumbers);
