//explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let voiceSelect = document.getElementById('voice-select');
  let textInput = document.getElementById('text-to-speak');
  let playButton = document.querySelector('button');
  let image = document.querySelector('img');

  // Populate the dropdown menu with voices
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
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
    let voices = synth.getVoices();
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
