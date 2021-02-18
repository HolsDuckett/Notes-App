
var notesList = []

const abbreviate = (string) => {
  if (string.length <= 20) { return string }
  tempString = ''
  for (let i = 0; i < 20; i++) {
    tempString += string[i]
  }
  return tempString
}
