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


function renderEmoji(emojiless) {
  getEmojis(emojiless).then(post => {
    return post.emojified_text
  });
}
