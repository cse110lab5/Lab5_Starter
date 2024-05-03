// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  let hornOptions = document.getElementById('horn-select');
  let button = document.querySelector('button');
  let slider = document.getElementById('volume');
  let sliderValue = slider.value;
  let sound = document.querySelector('.hidden');
  let image = document.getElementsByTagName('img');
  let isParty = false;

  hornOptions.addEventListener('change', function() {
    let hornEl = hornOptions.value;
    let hornTypeImage = image[0];
    if(hornEl === 'air-horn'){
      isParty = false;
      hornTypeImage.src = 'assets/images/air-horn.svg';
      sound.src = 'assets/audio/air-horn.mp3';
    }

    else if(hornEl === 'car-horn'){
      isParty = false;
      hornTypeImage.src = 'assets/images/car-horn.svg';
      sound.src = 'assets/audio/car-horn.mp3';
    }

     else if(hornEl === 'party-horn'){
      isParty = true;
      hornTypeImage.src = 'assets/images/party-horn.svg';
      sound.src = 'assets/audio/party-horn.mp3';
    }
  });

  ///also change audio volume
  slider.addEventListener('input', function(){
    sliderValue = slider.value;
    let speakerImage = image[1];
    if (sliderValue == 0){
      speakerImage.src =  'assets/icons/volume-level-0.svg';

    } else if (sliderValue >= 1 && sliderValue < 33){
      speakerImage.src =  'assets/icons/volume-level-1.svg';

    } else if (sliderValue >=33 && sliderValue < 66){
      speakerImage.src =  'assets/icons/volume-level-2.svg';

    } else{
      speakerImage.src =  'assets/icons/volume-level-3.svg';
    }
  })

  button.addEventListener('click', function() {
    if(isParty){
      jsConfetti.addConfetti({
        emojis: ['🎉','🎊','🥳'],
        emojiSize: 50,
        confettiNumber: 50,
      });
    }
    sound.volume = sliderValue / 100;
    sound.play();
  });



}