let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let i = 0; i < array.length; i++) {
  for (let n = 0; n < array[i].length; n++) {
    if (array[i][n] > 0) {
      console.log(array[i][n]);
    }
  }
}
