/** @score 260 */
function manufacture(gifts: string[], materials: string) {
  const builtGift: string[] = []
  for (const gift of gifts) {
    if ([... new Set(gift)].every(c => materials.includes(c))) {
      builtGift.push(gift)
    }
  }
  return builtGift
}

/** @score 270 */
function manufacture2(gifts: string[], materials: string) {
  return gifts.filter(gift => {
    return [...gift].every(c => materials.indexOf(c) !== -1)
  })
}

/** @score 280 */
function manufacture3(gifts: string[], materials: string) {
  const regex = new RegExp("^[" + materials + "]+$") // Didn't accepted template strings
  return gifts.filter(gift => regex.test(gift))
}
