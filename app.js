const button = document.querySelector('.talk');
const content = document.querySelector('.content')



const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recoginition = new speechRecognition();

button.addEventListener('click', () => {
    console.log('button is clicked to start recording');
    recoginition.start()
})
recoginition.onresult = (event) => {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript
    readOutLoud(transcript)
}

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message
    speech.pitch = 1
    speech.rate = 1
    speech.volume = 1

    window.speechSynthesis.speak(speech)
    console.log(speech);
}
