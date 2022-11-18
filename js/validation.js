function checkIfSpeechHasAValidValue(speech) {
  const number = Number(speech)

  if (checkIfValueIsInvalid(number)) {
    displayInvalidValueMessage('Valor inválido!')
    return
  }

  if (numberIsLowerOrHigherThanAllowed(number)) {
    displayInvalidValueMessage(
      `Valor Inválido: fale um número entre ${lowerValue} e ${higherValue}`
    )
    return
  }

  displayLowerOrHigherNumber(number)

  if (number === secretNumber) {
    displaySucessMessage(number)
  }
}

function checkIfValueIsInvalid(number) {
  return Number.isNaN(number)
}

function numberIsLowerOrHigherThanAllowed(number) {
  return number > higherValue || number < lowerValue
}

function displayInvalidValueMessage(message) {
  const messageParagraph = document.createElement('p')
  messageParagraph.innerText = message
  tryElement.appendChild(messageParagraph)
}

function displaySucessMessage(number) {
  document.body.innerHTML = ''

  const sucessParagraph = document.createElement('h2')
  sucessParagraph.innerText = 'Você acertou!'

  const secretNumberElement = document.createElement('h3')
  secretNumberElement.innerText = `o número secreto era ${number}`

  document.body.appendChild(sucessParagraph)
  document.body.appendChild(secretNumberElement)

  playAgain()
}

function playAgain() {
  const playAgainButton = document.createElement('button')
  playAgainButton.classList.add('btn-play-again')
  playAgainButton.innerText = 'Jogar novamente'
  playAgainButton.addEventListener('click', () => window.location.reload())

  document.body.appendChild(playAgainButton)
}

function displayLowerOrHigherNumber(number) {
  const lowerOrHigherParagraphElement = document.createElement('p')
  const arrowIcon = document.createElement('i')

  if (number > secretNumber) {
    lowerOrHigherParagraphElement.innerText = 'O número secreto é menor '
    arrowIcon.classList.add('fa-solid')
    arrowIcon.classList.add('fa-down-long')
  }
  if (number < secretNumber) {
    lowerOrHigherParagraphElement.innerText = 'O número secreto é maior '
    arrowIcon.classList.add('fa-solid')
    arrowIcon.classList.add('fa-up-long')
  }

  lowerOrHigherParagraphElement.appendChild(arrowIcon)
  tryElement.appendChild(lowerOrHigherParagraphElement)
}
