// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornOptions = document.getElementById('horn-select');

  hornOptions.addEventListener('change', function() {
    let optionSound = hornOptions.options[hornOptions.selectedIndex].text;

    if(optionSound == 'air-horn'){
      //image.src = 'assets/images/air-horn.svg';
      //load the sound
    }

    if(optionSound == 'car-horn'){
      // change image
      //load the sound
    }

    if(optionSound == 'party-horn'){
      //change image
      //load the sound
    }
  })
}