// do work here

function primeFinder(n, lastPrime){
  if(arguments.length == 1) {
    console.log('There is only 1 parameter.');
    lastPrime = 3;
  }
  // console.log('n: ', n, ', prime: ', lastPrime);
  if(n === 2) {
    console.log('the ultimate prime is: ', lastPrime);
    return lastPrime;
  }
  lastPrime +=2; //increment lastPrime by 2
  while(!isPrime(lastPrime)) {
    //keep incrementing by 2 if not prime
    lastPrime += 2;
  }
  return primeFinder(--n, lastPrime);
}

function isPrime(num) {
    var squareRoot = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= squareRoot; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log('getNthPrime(6): ', getNthPrime(6));
console.log('primeFinder(10001): ', primeFinder(10001));