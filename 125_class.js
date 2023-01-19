class PolidromSum {
    constructor(n) {
      this.n = n
    }
    
    isPolidrome(data) {
        const arrData = data.toString().split('')
        const reversedData = arrData.reverse().join('')
        if (data == reversedData) {
          return data
        } else {
          return false
        }
    }
  
  
    isSum(){ 
      let limit = this.n ** 0.5 
      let initialValue = 0;
      let palidromArr = []
      let sumOfAllPolidromes
      for (let i = 2; i<limit; i++){
          let sum = 0
          for (let j=i; j<limit; j++){
              sum = sum + j ** 2
              if (this.isPolidrome(sum) && sum < this.n){
                  palidromArr.push(sum)
              }
            }
        }
        sumOfAllPolidromes = palidromArr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
      return sumOfAllPolidromes
    }
}
  
const polidromSum = new PolidromSum(10 ** 8)
  
polidromSum.isSum()