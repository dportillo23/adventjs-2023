/** @score 160 */
function cyberReindeer(road: string, time: number) {
  let newRoad = road;
  const roadStates = [road]
  let position = 0
  for (let t = 1; t < time; t++) {
    if (t === 5) {
      road = road.replaceAll('|', '*')
    }
    if (road[position + 1] !== '|') {
      const before = '.' + road.substring(1, position + 1)
      const after = road.substring(position + 2, road.length)
      newRoad = `${before}S${after}`
      position++
    }
    roadStates.push(newRoad)
  }
  return roadStates
}

/** @score 260 */
function cyberReindeer2(road: string, time: number) {
  const roadStates = [road]
  let currentRoad = road;
  let sPosition = 0
  const roadLength = road.length
  for (let t = 1; t < time; t++) {
    if (t === 5) {
      road = road.replaceAll('|', '*')
    }
    const nextPosition = sPosition + 1
    if (road[nextPosition] !== '|') {
      const before = '.' + road.substring(1, nextPosition)
      const after = road.substring(nextPosition + 1, roadLength)
      currentRoad = `${before}S${after}`
      sPosition = nextPosition
    }
    roadStates.push(currentRoad)
  }
  return roadStates
}
