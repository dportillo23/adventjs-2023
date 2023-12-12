"use strict";
/** @score 390 */
function adjustLights(lights) {
    const lightsOptions = ['🟢', '🔴'];
    let redFirst = 0;
    let greenFirst = 0;
    let i = 0;
    for (const light of lights) {
        const rest = i % 2;
        redFirst += +(light === lightsOptions[+(rest !== 0)]);
        greenFirst += +(light === lightsOptions[+(rest === 0)]);
        i++;
    }
    return Math.min(redFirst, greenFirst);
}
