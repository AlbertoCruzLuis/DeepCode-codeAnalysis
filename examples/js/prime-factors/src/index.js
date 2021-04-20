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


const showPrimeFactors = (listNumbers) => {
  // bad implementation
  /*listNumbers.map((number) => {
    console.log(primeFactors(number));
  })*/

  for (const number of listNumbers) {
    console.log(primeFactors(number));
  }
}


showPrimeFactors([5,8,3,6]);