"use strict";

module.exports = function(str, limit, padString, padPosition) {
    padString = padString || "#";
    padPosition = (["right", "left"].indexOf(padPosition) > -1) ? padPosition : "right";

    if (typeof str !== "string" || typeof limit !== "number") {
        throw new Error("Invalid arguments specified");
    }
    
    var strLength = str.length;

    if (strLength > limit) {
        return str.substring(0, limit);
    } else if (strLength < limit) {
        var newString = str;
        for (var i = 0; i < limit - strLength; i += 1) {
            if (padPosition === "right") {
                newString += padString;
            } else {
                newString = padString + newString;
            }
        }
        return newString;
    }
    return str;
}