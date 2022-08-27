let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let even of array) {
  if (even % 2 == 0) {
    console.log(even);
  }
}

for (let odd of array) {
  if (odd % 2 != 0) {
    console.log(odd);
  }
}
