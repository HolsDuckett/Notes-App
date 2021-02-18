function createNote() {

  notesList.push(document.getElementById('note-input').value)
  var notes = document.getElementById('all-notes')
  let tempString = ''
  for (let i = 0; i < notesList.length; i++) {
    tempString += `<p>${notesList[i]}</p>`
  }
  notes.innerHTML = tempString
  console.log(notesList);

}


var createButton = document.getElementById('create-button')
console.log(createButton)
createButton.addEventListener("click", createNote)
