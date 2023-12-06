"use strict";
/** @score 280 */
function decode(message) {
    const match = message.match(/\([^()]+\)/);
    if (match) {
        const stringToRevert = match[0].replace(/^\(|\)$/g, '');
        const revertedString = [...stringToRevert].reverse().join('');
        const newMessage = message.replace(match[0], revertedString);
        const decoded = decode(newMessage);
        return decoded;
    }
    return message;
}
/** @score 240 */
function decode2(message) {
    const regex = /\([^\s]+\)|\([\w\s()]+\)/g;
    const matches = message.match(regex);
    let newMessage = message;
    if (matches) {
        for (const match of matches) {
            let flag = false;
            const stringToRevert = match.replace(/^\(|\)$/g, '');
            let revertedString = '';
            let tempIdx;
            for (let i = stringToRevert.length - 1; i >= 0; i--) {
                const char = stringToRevert[i];
                if (!flag) {
                    if (char !== ')') {
                        revertedString += char;
                    }
                    else {
                        flag = true;
                        tempIdx = i;
                    }
                }
                else {
                    if (char === '(') {
                        revertedString += stringToRevert.slice(i + 1, tempIdx);
                        flag = false;
                    }
                }
            }
            newMessage = newMessage.replace(match, revertedString);
        }
    }
    return newMessage;
}
