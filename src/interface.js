function createNote() {

  notesList.push(document.getElementById('note-input').value)
  updateList()
}


var createButton = document.getElementById('create-button')
console.log(createButton)
createButton.addEventListener("click", createNote)


function updateList() {
  var notes = document.getElementById('all-notes')
  let tempString = ''
  for (let i = 0; i < notesList.length; i++) {
    tempString += `<div id="note-${i}" class="notes"><p>${abbreviate(notesList[i])}</p>
    <button class="minimize-button" id="minimize-${i}">-</button>
    <button class="expand-button" id="expand-${i}">+</button></div>`

  }
  notes.innerHTML = tempString

}

updateList()
