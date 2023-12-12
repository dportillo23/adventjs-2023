"use strict";
/** @score 280 */
function createChristmasTree(ornaments, height) {
    const bigOrnaments = ornaments.repeat(height ** 2);
    const firstSpace = ' '.repeat(height - 1);
    let tree = firstSpace + ornaments[0] + '\n';
    for (let i = 2, j = 1; i <= height; j += i, i++) {
        const blankSpaces = ' '.repeat(height - i);
        const ornament = bigOrnaments.substring(j, i + j).split('').join(' ');
        tree += blankSpaces + ornament + '\n';
    }
    tree += firstSpace + '|' + '\n';
    return tree;
}
