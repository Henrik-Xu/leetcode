/**
 * Flipping an Image  
 */
let flipAndInvertImage = function (image) {
  let N = image.length;
  for (const row of image) {
    for (let i = 0; i * 2 < N; i++) {
      if (row[i] == row[N - i - 1]) {
        row[i] = row[N - i - 1] ^= 1;
      }
    }
  }
  return image;
};
let image = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
let res = flipAndInvertImage(image);
console.log(res);
