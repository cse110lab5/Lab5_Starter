// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornOptions = document.getElementById('horn-select');
  let button = document.querySelector('button');
  let sound = document.querySelector('.hidden');
  let image = document.querySelector('img');
  let isParty = false;

  hornOptions.addEventListener('change', function() {
    let hornEl = hornOptions.value;
  
    if(hornEl === 'air-horn'){
      isParty = false;
      image.src = 'assets/images/air-horn.svg';
      sound.src = 'assets/audio/air-horn.mp3';
    }

    else if(hornEl === 'car-horn'){
      isParty = false;
      image.src = 'assets/images/car-horn.svg';
      sound.src = 'assets/audio/car-horn.mp3';
    }

     else if(hornEl === 'party-horn'){
      isParty = true;
      image.src = 'assets/images/party-horn.svg';
      sound.src = 'assets/audio/party-horn.mp3';
    }
  });

  button.addEventListener('click', function() {
    if(isParty){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🎉'],
        emojiSize: 50,
        confettiNumber: 50,
      })
    }
    sound.play();
  });
}