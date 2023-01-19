class GetPrimesFromBillion {
    constructor(number) {
      this.number = number
    }
    isPrime(number) {
      try {
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
      } catch (e) {
        console.log(e)
      }
    }
  
    primeN(number) {
      try {
        let primeArray = this.isPrime(this.number)
        let newPrimeArray = []
        for (let i = 1; i <= this.number; i++) {
          for (let n = 1; n <= this.number; n++) {
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
}
  
const getPrimes = new GetPrimesFromBillion(100)
getPrimes.primeN()
  