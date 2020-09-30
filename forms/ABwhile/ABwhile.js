/*
You will be writing a program using a while loop that gets a first name from the user, 
puts it into an array, and runs as many times as the user wants. 
Then the program cycles through the names, outputting each in each iteration. 
*/


/*
let city = []
let userStop = "true"

while (userStop == "true") {
  userStop = prompt("Do you want to enter a value?: (true of false)")
  while (userStop == "true"){
  city = prompt("Enter the city")
  array.push(city)
  city = city.toLowerCase()
  userStop = prompt("Do you want to enter a value?: (true of false)")
}
  if (userStop == "false") {
  stop
}
}
alert(city)

*/

let cityArray = []
let cityInput = prompt('Please enter a city')
while (cityInput != ''){
  cityArray.push(cityInput)
  cityInput = prompt('Please enter a city, or nothing to end the input.')
}
i = 0 
while(i < cityArray.length){
  console.log(cityArray[i].toLowerCase())
  i += 1 
}