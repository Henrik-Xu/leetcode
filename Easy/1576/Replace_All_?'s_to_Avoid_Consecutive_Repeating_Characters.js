/**
 * Replace All ?'s to Avoid Consecutive Repeating Characters
 */
const modifyString = function(s) {
    let res = [...s];
    
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== "?") continue;
      if (res[i-1] !== "a" && res[i+1] !== "a") { res[i] = "a"; continue; }
      if (res[i-1] !== "b" && res[i+1] !== "b") { res[i] = "b"; continue; }
      res[i] = "c";
    }
    
    return res.join("");
  };