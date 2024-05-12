function piramid2(num) {
  //code here
  for (let i = num; i > 0; i--) {
    let temp = i;
    let result = "";
    for (let j = temp; j > 0; j--) {
      result += temp.toString();
    }
    console.log(result)
  }

  for (let i = 2; i <= num; i++) {
    let temp = i;
    let result = "";
    for (let j = 0; j < temp; j++) {
      result += temp.toString();
    }
    console.log(result)
  }
}

console.log(piramid2(5));

/*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */
