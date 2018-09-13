/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var loveTrianglesCount = 0;
    for (var n = 0; n < preferences.length; n++) {
        var a = n + 1;
        var b = preferences[a - 1];
        var c = preferences[b - 1];
        var d = preferences[c - 1];
        if (b != c && c != d && b != d) {
            if (a === d) {
                loveTrianglesCount++;
            }
        }
    }
    return loveTrianglesCount / 3;
};
