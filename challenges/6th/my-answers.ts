/** @score 290 */
function maxDistance(movements: string) {
  const right = movements.match(/>/g)?.length ?? 0
  const left = movements.match(/</g)?.length ?? 0
  const temp = right - left
  const extra = movements.match(/\*/g)?.length ?? 0
  return Math.abs(temp) + extra
}

/** @score 350 */
function maxDistance2(movements: string) {
  let count = 0;
  let extra = 0;
  for (let i = 0; i < movements.length; i++) {
    const char = movements[i]
    switch (char) {
      case '>': {
        count++
        break
      }
      case '<': {
        count--
        break
      }
      default: {
        extra++
      }
    }
  }
  return Math.abs(count) + extra
}

type CharType = '>' | '<' | '*'

/** @score 250 */
function maxDistance3(movements: string) {
  let count = 0;
  let extra = 0;
  const mapper = {
    '>': () => count++,
    '<': () => count--,
    '*': () => extra++
  }
  for (let i = 0; i < movements.length; i++) {
    mapper[movements[i] as CharType]()
  }
  return Math.abs(count) + extra
}

/** @score 390 */
function maxDistance4(movements: string) {
  const left = movements.match(/</g)?.length ?? 0
  const right = movements.match(/>/g)?.length ?? 0
  return Math.abs(right - left) + movements.length - (right + left)
}
