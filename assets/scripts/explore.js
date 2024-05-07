// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let voices = synth.getVoices();
  let voiceSelect = document.getElementById('voice-select');
  let textInput = document.getElementById('text-to-speak');
  let playButton = document.querySelector('button');
  let image = document.querySelector('img');

  //populate the dropdown menue with voices
  // -> voices are loading only after a refresh in inital page open
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.addEventListener('change', function() {
    voiceSelect.value = this.value;
  });

  textInput.addEventListener('input', function() {
    textInput.value = textInput.value;
  });

  playButton.addEventListener('click', function() {
    let utterThis = new SpeechSynthesisUtterance(textInput.value);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    image.src = 'assets/images/smiling-open.png'; 

    utterThis.onend = function() {
      image.src = 'assets/images/smiling.png'; 
    };
  });
}
