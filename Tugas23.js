function tugas23() {
  var numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  var mabelas = numbers.filter(numbers => {
    return numbers > 15;
  })
  console.log(mabelas);
}
tugas23();
