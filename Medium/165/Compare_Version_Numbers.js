/**
 * Compare Version Numbers
 */
var compareVersion = function(version1, version2) {
    let levels1 = version1.split(".");
    let levels2 = version2.split(".");

    let length = Math.max(levels1.length, levels2.length);;
    for (let i=0; i<length; i++) {
    	let v1 = i < levels1.length ? parseInt(levels1[i]) : 0;
    	let v2 = i < levels2.length ? parseInt(levels2[i]) : 0;
    	if (v1!=v2) {
    		return v1>v2?1:-1;
    	}
    }
    return 0;
};