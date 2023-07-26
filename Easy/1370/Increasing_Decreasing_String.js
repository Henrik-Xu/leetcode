/**
 * Increasing Decreasing String
 */
const sortString = s => {
    let count = Array(26).fill(0), result = ''
    for(const char of s)count[char.charCodeAt() - 97]++
    let chars = [...new Set(s)].sort()
    while(result.length < s.length){
        for(const char of chars){
            let idx = char.charCodeAt() - 97 
            if(count[idx]){
                result += char
                count[idx]--
            }
        }
        for(let i = chars.length-1; i >= 0; i--){
            let char = chars[i], idx = char.charCodeAt() - 97
            if(count[idx]){
                result += char
                count[idx]--
            }
        }
    }
    return result
}