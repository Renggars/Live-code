/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text) {
  //...
  let hurufDuplikat = [];
  let tempResult = [];
  let textKecil = text.toLowerCase();
  let arr = textKecil.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      if (temp == arr[k]) {
        hurufDuplikat.push(temp);
      }
    }
  }

  if (hurufDuplikat.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < hurufDuplikat.length; i++) {
      for (let j = i + 1; j < hurufDuplikat.length; j++) {
        if (hurufDuplikat[i] == hurufDuplikat[j]) {
          delete hurufDuplikat[j];
        }
      }
    }

    for (let i = 0; i < hurufDuplikat.length; i++) {
      if (hurufDuplikat[i] !== undefined) {
        tempResult.push(hurufDuplikat[i]);
      }
    }
  }
  return tempResult.length;
}

console.log(duplicateCount("")); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("abcabcdABcefGhg")); //4
