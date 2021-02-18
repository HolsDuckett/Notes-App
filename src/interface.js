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
    tempString += noteLayout(notesList[i],i)

  }
  notes.innerHTML = tempString

}

function noteLayout(string, index){
  return `<div id="note-${index}" class="notes"><p>${abbreviate(string)}</p>
  <button class="minimize-button" id="minimize-${index}">-</button>
  <button class="expand-button" id="expand-${index}">+</button></div>`

}

updateList()
