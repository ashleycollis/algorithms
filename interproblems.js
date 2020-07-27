// input array of integers -> array of integers same length
//each  1374 -> [84, 28, 12, 21]
[];

function comboArray(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newValue = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j == i) {
        continue;
      }
      newValue *= arr[j];
    }
    resultArr.push(newValue);
  }
  return resultArr;
}

function comboArray2(arr) {
  let totalProduct = 1;
  let ZeroValue = 0;
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      continue;
    }
    totalProduct *= arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    let valueAdded = 1;
    let value = arr[i];
    if (value === 0) {
      resultArray.push(totalProduct);
    } else {
      console.log('product:', totalProduct);
      valueAdded = totalProduct / value;
      if (arr.indexOf(0) != -1) {
        valueAdded = 0;
        resultArray.push(valueAdded);
        continue;
      }
      resultArray.push(valueAdded);
    }
  }
  return resultArray;
}

console.log(comboArray2([0, 0, 7, 4]));
