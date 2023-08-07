function isPrime(num) {
    if (num <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false; // If num is divisible by any number between 2 and num/2, it's not prime
      }
    }
  
    return true; // If num is not divisible by any number between 2 and num/2, it's prime
  } 

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(19)); 
console.log(isPrime(1));