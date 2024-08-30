function continueGame(){
    const alphabet = getRandomAlphabet()
    const currentALphabet = document.getElementById('currentAlphabet');
    currentALphabet.innerText = alphabet;

    addBackgroundColor(alphabet)
}

function play(){
  addHiddenClass('home')
  removeHiddenClass('continue-game')
  continueGame()
}