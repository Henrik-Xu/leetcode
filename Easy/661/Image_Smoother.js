/**
 * Image Smoother
 */
let imageSmoother = function (img) {
    let R = img.length, C = img[0].length;
    let ans = new Array(R).fill(0).map(() => new Array(C).fill(0));
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        let count = 0;
        for (let nr = r - 1; nr <= r + 1; nr++) {
          for (let nc = c - 1; nc <= c + 1; nc++) {
            if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
              ans[r][c] += img[nr][nc];
              count++;
            }
          }
        }
        ans[r][c] = Math.floor(ans[r][c] / count);
      }
    }
    return ans;
  };

let img = [[1,1,1],[1,0,1],[1,1,1]];
let res=imageSmoother(img);
console.log(res);