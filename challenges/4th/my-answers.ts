/** @score 280 */
function decode(message: string) {
  const regex = /\([^()]+\)/
  const match = message.match(regex)
  if (match) {
    const stringToRevert = match[0].replace(/^\(|\)$/g, '')
    const revertedString = [...stringToRevert].reverse().join('')
    const newMessage = message.replace(match[0], revertedString)
    const decoded = decode(newMessage)
    return decoded
  }
  return message
}