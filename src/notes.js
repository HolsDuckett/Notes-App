
var notesList = []

const abbreviate = (string) => {
  if (string.length <= 20) { return string }
  tempString = ''
  for (let i = 0; i < 20; i++) {
    tempString += string[i]
  }
  return tempString
}



function getEmojis(emojiless) {
  return fetch('https://makers-emojify.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"text": emojiless})
  }).then(response => {

    return response.json();
  })
}



}
