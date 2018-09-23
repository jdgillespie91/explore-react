const randomAlphanumeric = () => {
  let text = ''
  let characters = '1234567890ABCDEF'

  for (let i = 0; i < 9; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return text
}

export {
  randomAlphanumeric
}
