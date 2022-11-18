const tryElement = document.getElementById('try')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  const speech = e.results[0][0].transcript
  displaySpeech(speech)
  checkIfSpeechHasAValidValue(speech)
}

function displaySpeech(speech) {
  tryElement.innerHTML = ''

  const paragraph = document.createElement('p')
  paragraph.innerText = 'Você disse:'

  const boxElement = document.createElement('span')
  boxElement.classList.add('box')
  boxElement.innerText = speech

  tryElement.appendChild(paragraph)
  tryElement.appendChild(boxElement)
}

recognition.addEventListener('end', () => recognition.start())
