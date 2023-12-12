"use strict";
/** @score 390 */
function organizeGifts(gifts) {
    const regex = /[\d]+[a-z]/g;
    const matches = gifts.match(regex);
    let organization = '';
    for (const match of matches) {
        const lastIdx = match.length - 1;
        const letter = match[lastIdx];
        const amount = match.substring(0, lastIdx);
        const pallets = +amount / 50;
        const boxes = (+amount / 10) % 5;
        const bags = +amount % 10;
        organization += `[${letter}]`.repeat(pallets);
        organization += `{${letter}}`.repeat(boxes);
        organization += `(${letter.repeat(bags)})`.replace('()', '');
    }
    return organization;
}
