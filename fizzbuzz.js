module.exports = function FizzBuzz() {
    const num = [];
    for(let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        num.push("FizzBuzz");
      }
      else if(i % 3 === 0){
        console.log("Fizz");
        num.push("Fizz");
      }
      else if(i % 5 === 0){
        console.log("Buzz");
        num.push("Buzz");
      }
      else{
        console.log(i);
        num.push(i);
      }
    }
    return num;
  }