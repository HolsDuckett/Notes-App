function createNote() {

  notesList.push(document.getElementById('note-input').value)
  updateList()
}


var createButton = document.getElementById('create-button')
console.log(createButton)
createButton.addEventListener("click", createNote)

function expandNote(index){
  noteText = document.getElementById(`note-text-${index}`)
  noteText.style.color = 'red';
  noteText.textContent = notesList[index]
}

function updateList() {
  var notes = document.getElementById('all-notes')
  let tempHTML = ''
  for (let i = 0; i < notesList.length; i++) {
    tempHTML += noteLayout(notesList[i],i)

  }
  notes.innerHTML = tempHTML

}

function noteLayout(string, index){
  return `<div id="note-${index}" class="notes"><p id='note-text-${index}'>${abbreviate(string)}</p>
  <button class="minimize-button" id="minimize-${index}">-</button>
  <button class="expand-button" onClick="expandNote(${index})" id="expand-${index}">
  +</button></div>`

}

updateList()
