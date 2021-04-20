const primeFactors = (num) => {

  let numCopy = num;
  let primes = [];
  let divisor = 2;

  while (numCopy > 1){
    if (numCopy % divisor === 0) {
      primes.push(divisor)
      numCopy = numCopy / divisor;
    } else {
      divisor++;
    }
  }

  return primes;

};


console.log(primeFactors(15));