const buttonOpenDialog = document.querySelector('#open-dialog')
const buttonCloseDialog = document.querySelector('#close-dialog')

const dialog = document.querySelector('dialog')

document.addEventListener('DOMContentLoaded', function(event) {
  const alphabet = [
    'a', 'b', 'c', 'd', 
    'e', 'f', 'g', 'h', 
    'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 
    'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 
    'y', 'z', 'A', 'B', 
    'C', 'D', 'E', 'F', 
    'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 
    'S', 'T', 'U', 'V', 
    'W', 'X', 'Y', 'Z'
  ]
  const section = document.querySelector('section')
  for(let index = 0; index < alphabet.length; index++) {
    let img = document.createElement('img')
    img.src = `https://source.unsplash.com/random?${alphabet[index]}=1`
    section.appendChild(img)
  }
})

buttonOpenDialog.onclick = function () {
  dialog.showModal()
  
  document.body.style.opacity = '50%'
}

buttonCloseDialog.onclick = function () {
  dialog.close()
  document.body.style.opacity = '100%'
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape')  document.body.style.opacity = '100%'
})