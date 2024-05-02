// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornOptions = document.getElementById('horn-select');

  hornOptions.addEventListener('change', function() {
    let optionSound = hornOptions.value;
    let image = document.getElementsByTagName('img'); //need to get image source
    console.log(optionSound)
    if(optionSound === 'air-horn'){
      image[0].src = 'assets/images/air-horn.svg';
      //load the sound
    }

    if(optionSound === 'car-horn'){
      image[0].src = 'assets/images/car-horn.svg';
      //load the sound
    }

    if(optionSound === 'party-horn'){
      image[0].src = 'assets/images/party-horn.svg';
      //load the sound
    }
  })
}