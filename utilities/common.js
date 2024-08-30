function addHiddenClass(elementId){
    const section = document.getElementById(elementId)
    section.classList.add('hidden')
}

function removeHiddenClass(elementId){
    const section = document.getElementById(elementId)
    section.classList.remove('hidden')
}

function addBackgroundColor(elementId){
    const alphabetBg = document.getElementById(elementId)
    alphabetBg.classList.add('bg-orange-400')
}
function getRandomAlphabet(){
    const allAlphabet = 'abcdefghijklmnopqrstwxyz';
    const alphabets = allAlphabet.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)

    return alphabets[index]
}