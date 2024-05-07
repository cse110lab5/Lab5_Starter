window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let voiceSelect = document.getElementById('voice-select');
  let textInput = document.getElementById('text-to-speak');
  let playButton = document.querySelector('button');
  let image = document.querySelector('img');

  // Populate the dropdown menu with voices
  function populateVoices() {
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Ensure voices are populated before initializing
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  } else {
    // If onvoiceschanged is not supported, populate voices immediately
    populateVoices();
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
