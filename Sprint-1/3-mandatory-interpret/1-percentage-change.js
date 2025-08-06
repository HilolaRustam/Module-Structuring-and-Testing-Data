let carPrice = "10,000"; //declaration of variable
let priceAfterOneYear = "8,543"; //declaration of variable

carPrice = Number(carPrice.replaceAll(",", ""));//function (Number,replaceAll)/ redeclaration of carPrice 
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));//function (Number,replaceAll)/redeclaration of PriceAfterOneYear

const priceDifference = carPrice - priceAfterOneYear;//declaration of variable
const percentageChange = (priceDifference / carPrice) * 100;//declaration of variable

console.log(`The percentage change is ${percentageChange}`);//Function console.log

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
done