/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = (coordinates) => {
    return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
}