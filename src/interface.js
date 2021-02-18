function createNote() {

  notesList.push(document.getElementById('note-input').value)
  updateList()
}


var createButton = document.getElementById('create-button')
console.log(createButton)
createButton.addEventListener("click", createNote)

function expandNote(index){
  noteText = document.getElementById(`note-text-${index}`)
  noteText.textContent = notesList[index]
}

function minimizeNote(index){
  noteText = document.getElementById(`note-text-${index}`)
  noteText.textContent = abbreviate(notesList[index])
}

function updateList() {
  var notes = document.getElementById('all-notes')
  let tempHTML = ''
  for (let i = notesList.length - 1; i >= 0 ; i--) {
    tempHTML += noteLayout(notesList[i],i)

  }
  notes.innerHTML = tempHTML

}

function noteLayout(string, index){
  return `<div id="note-${index}" class="notes"><p id='note-text-${index}'>${abbreviate(string)}</p>
  <button class="minimize-button" onClick="minimizeNote(${index})" id="minimize-${index}">-</button>
  <button class="expand-button" onClick="expandNote(${index})" id="expand-${index}">
  +</button></div>`

}

updateList()
