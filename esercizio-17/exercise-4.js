function calculate() {
  let value =0;
    return {
      add(number){
        value+= number
        return this
      },
      multiply(number){
        value*= number
        return this
      },
      sub(number){
        value-= number
        return this
    },
    divide(number){
      value/= number
      return this
  },
  printResult (){
    console.log('Il risultato sarà:'+ value)
  }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7