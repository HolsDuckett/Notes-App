function createNote() {

  notesList.push(document.getElementById('text-box-id').value)
  var notes = document.getElementById('text-id')
  let tempString = ''
  for (let i = 0; i < notesList.length; i++) {
    tempString += `<p>${notesList[i]}</p>`
  }
  notes.innerHTML = tempString
}


var createButton = document.getElementById('create-button')
createButton.addEventListener('click', createNote())