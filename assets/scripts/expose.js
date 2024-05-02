// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornOptions = document.getElementById('horn-select');
  let button = document.querySelector('button');
  let sound = document.querySelector('.hidden');
  let image = document.querySelector('img'); 

  hornOptions.addEventListener('change', function() {
    let hornEl = hornOptions.value;
  
    if(hornEl === 'air-horn'){
      image.src = 'assets/images/air-horn.svg';
      sound.src = 'assets/audio/air-horn.mp3'
    }

    else if(hornEl === 'car-horn'){
      image.src = 'assets/images/car-horn.svg';
      sound.src = 'assets/audio/car-horn.mp3'

    }

     else if(hornEl === 'party-horn'){
      image.src = 'assets/images/party-horn.svg';
      sound.src = 'assets/audio/party-horn.mp3'
    }
  });

  button.addEventListener('click', function() {
    sound.play();
  });
}