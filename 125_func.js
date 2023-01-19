function isPolidrome(data) {
    const arrData = data.toString().split('')
    const reversedData = arrData.reverse().join('')
    if (data == reversedData) {
      return data
    } else {
      return false
    }
}
  
  
function is_sum(n){ 
      let limit = n ** 0.5 
      let pals = []
      for (let i = 2; i<limit; i++){
          let sum = 0
          for (let j=i; j<limit; j++){
              sum = sum + j ** 2
              if (isPolidrome(sum) && sum < n){
                  pals.push(sum)
              }
          }
      }
    const initialValue = 0;
    const sum = pals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
      return sum
}
is_sum(10 ** 8)