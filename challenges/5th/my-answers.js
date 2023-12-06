"use strict";
/** @score 160 */
function cyberReindeer(road, time) {
    let newRoad = road;
    const roadStates = [road];
    let position = 0;
    for (let t = 1; t < time; t++) {
        if (t === 5) {
            road = road.replaceAll('|', '*');
        }
        if (road[position + 1] !== '|') {
            const before = '.' + road.substring(1, position + 1);
            const after = road.substring(position + 2, road.length);
            newRoad = `${before}S${after}`;
            position++;
        }
        roadStates.push(newRoad);
    }
    return roadStates;
}
