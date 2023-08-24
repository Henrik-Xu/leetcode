/**
 * Remove Letter To Equalize Frequency
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const hashmap = new Map();
    
    for (let i = 0; i < word.length; i++) {
        const character = word[i];
        if (hashmap.has(character)) {
            hashmap.set(character, hashmap.get(character) + 1);
        } else {
            hashmap.set(character, 1);
        }
    }
    let output = false;
    hashmap.forEach((value, key) => {
        const newMap = new Map(hashmap);
        if (value === 1) {
            newMap.delete(key)
        } else {
            newMap.set(key, newMap.get(key) - 1);
        }
        if (new Set([...newMap.values()]).size === 1) output = true;
    })
    return output;
}