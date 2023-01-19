function isPrime(number) {
    let arr = []
    for (let j = 2; j <= number; j++) {
      let notPrime = false;
      for (let i = 2; i < j; i++) {
        if (j % i === 0) {
          notPrime = true;
        }
      }
      if (notPrime === false) {
        arr.push(j)
      }
    }
    return arr
}
  
function primeN(number) {
    try {
      let primeArray = isPrime(number)
      let newPrimeArray = []
      for (let i = 1; i <= number; i++) {
        for (let n = 1; n <= number; n++) {
          primeArray.forEach(elem => {
            if (n ** 3 + (n ** 2) * elem == i ** 3) {
              newPrimeArray.push(elem)
            }
          })
        }
      }
      return newPrimeArray.length
    } catch (e) {
      console.log(e)
    }
}
primeN(100)