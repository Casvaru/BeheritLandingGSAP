const word = 'BEHERIT CARMESI'
const $h1Element = document.querySelectorAll('.textBeherit')
const arrayLetter = word.split('')

$h1Element.forEach((e) => {
  arrayLetter.forEach((letter) => {
    const createSpan = document.createElement('span')
    createSpan.textContent = letter
    e.appendChild(createSpan)
  })
})
