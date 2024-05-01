// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  htmlElement.addEventListener('input', function() {
    let soundName = document.getElementById('horn-select');
    let image = document.getElementsByClassName('img')

    if(soundName == 'air-horn'){
      
      //load the sound
    }

    if(soundName == 'car-horn'){
      let image = document.getElementsByClassName('img')
      //load the sound
    }

    if(soundName == 'party-horn'){
      let image = document.getElementsByName('img')
      //load the sound
    }
  })
}