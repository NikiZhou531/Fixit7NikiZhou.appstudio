function calculate(num1, num2) {
  return parseInt(num1) + parseInt(num2)
}

let num1 = prompt('Enter the first number')
let num2 = prompt('Enter the second number')

let summedNumbers = calculate(num1, num2)
console.log(`the sum of ${num1} and ${num2} is ${summedNumbers}`)

