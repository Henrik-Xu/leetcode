/**
 * Escape The Ghosts
 */
let escapeGhosts = function (ghosts, target) {
  let distance = Math.abs(target[0]) + Math.abs(target[1]);
  for (const ghost of ghosts) {
    if (Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]) <= distance) {
      return false;
    }
  }
  return true;
};
let ghosts = [[1, 0]], target = [2, 0];
let res = escapeGhosts(ghosts, target);
console.log(res);
