/** @score 180 */
function findFirstRepeated(gifts: number[]) {
  const unique: number[] = []
  for (const gift of gifts) {
    if (unique.includes(gift)) return gift
    unique.push(gift)
  }
  return gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1
}

/** @score 260 */
function findFirstRepeated2nd(gifts: number[]) {
  const unique = new Set()
  for (const gift of gifts) {
    if (unique.has(gift)) return gift
    unique.add(gift)
  }
  return gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1
}

/** @score 340 */
function findFirstRepeated3rd(gifts: number[]) {
  return gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1
}
