// collect temperature in Celsius from  user
let temperatureCelsius = prompt("Enter temperature in Celsius:");

// Convert Celsius to Fahrenheit using the given formula
let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

//  show result in console
console.log(`${temperatureCelsius} Celsius is equal to ${temperatureFahrenheit} degrees Fahrenheit.`);
