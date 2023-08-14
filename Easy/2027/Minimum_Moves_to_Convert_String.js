/**
 * Minimum Moves to Convert String
 */
var minimumMoves = function(s) {
    let i = 0, n = s.length, count = 0;
	while (i < n) {
		if (s[i] == 'O') 
			i++;
		else
			count++, i += 3;
	}
	return count;
};
let s = "XXOX";
let res=minimumMoves(s);
console.log(res);