const lowerValue = 1
const higherValue = 1000
const secretNumber = generateRandomNumber()

function generateRandomNumber() {
  return parseInt(Math.random() * higherValue + 1)
}

console.log(`Número secreto: ${secretNumber}`)

const lowerValueElement = document.querySelector('#lower-value')
lowerValueElement.textContent = lowerValue

const higherValueElement = document.querySelector('#higher-value')
higherValueElement.textContent = higherValue
