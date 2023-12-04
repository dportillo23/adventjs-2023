/** @score 350 */
function findNaughtyStep(original: string, modified: string) {
  if (original.length > modified.length) {
    return [...original].find((c, i) => c !== modified[i])
  }
  if (original.length < modified.length) {
    return [...modified].find((c, i) => c !== original[i])
  }

  return ''
}

/** @score 340 */
function findNaughtyStep2nd(original: string, modified: string) {
  if (modified === original) {
    return ''
  }

  const isOriginalMax = original.length > modified.length
  const maxValue = isOriginalMax ? original.length : modified.length
  for (let i = 0; i < maxValue; i++) {
    if (original[i] !== modified[i]) {
      return isOriginalMax ? original[i] : modified[i]
    }
  }
}

/** @score 360 */
function findNaughtyStep3rd(original: string, modified: string) {
  if (original === modified) return ''
  const biggerString = original.length > modified.length ? original : modified
  return [...biggerString].find((_, i) => original[i] !== modified[i]) ?? ''
}

/** @score 370 */
function findNaughtyStep4rd(original: string, modified: string) {
  const oLength = original.length
  const mLength = modified.length
  const biggerString = oLength > mLength
    ? original : modified
  return [...biggerString].find((_, i) => original[i] !== modified[i]) ?? ''
}