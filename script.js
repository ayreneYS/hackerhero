///////////////////////////////////////////
// ============ HACKERHERO ============ //
//////////////////////////////////////////

let arr = [1, 2, 3, 4];

// 1
function print1to20() {
  let i = 1;
  while (i <= 20) {
    i++;
    // console.log(i);
  }
}
print1to20();

// 2
// function odd() {
//   let i;
//   for (i = 3; i <= 20; i += 2) {
//     console.log(i);
//   }
// }
// odd();

// 3
// function even() {
//   let sum = 0;
//   for (let i = 4; i <= 22; i += 2) {
//     console.log(i);
//   }
//   return sum += i;
// }
// even();

// 4
// function seven() {
//   if ( i = 7; i <= 63; i -= 7) {
//     console.log(i);
//   }
// }
// seven();

// 6
// function ar(arr) {
//   let n = arr[0] + arr.length;
//   // for(let i = 0; i < arr.length; i++){}
//   // console.log(n);
// }
// ar();

// 8
// function odd() {
//   let sum = 0;
//   for (let i = -25000; i <= 30000; i += 2) {
//     console.log(i);
//     sum += i;
//   }
//   return sum;
// }
// odd();

// 9
// function even() {
//   let sum = 0;
//   for (let i = 4; i <= 22; i += 2) {
//     console.log(i);
// sum += i
//   }
//   return sum;
// }
// even();

// 10
function pa(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 11
function paa(arr) {
  for (let num of arr) {
    if (num > 0) {
      console.log(arr[i]);
    }
  }
}

// 12
function paaa(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(i);
    }
  }
}

// 13
function ar(arr) {
  for (let num of arr) {
    return arr.map(Math.abs);
  }
}

// 14
for (let i = 0; i < arr.length; i++) {
  let num = arr.map(Math.abs);
  return num.map((n, i) => n * num[i]);
}

// 15
function noNeg(arr) {
  const newArr = arr.map((x) => (x < 0 ? 0 : x));
  return newArr;
}

// 16
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

// 17
function findMax(arr) {
  const max = Math.max(...arr);
  return max;
}

// 18
function findMin(arr) {
  return Math.min(...arr);
}

// 19
function findMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return `[${min},${max}]`;
}

// 20
function countPositives(arr) {
  let sum = 0;
  for (let newArr of arr) {
    if (newArr > 0) {
      sum++;
    }
  }
  arr[arr.length - 1] = sum;

  return arr;
}

// 21
function valGreaterThanSecond(arr) {
  let sum = 0;
  for (let newArr of arr) {
    if (newArr > arr[1]) {
      console.log(newArr);
      sum += newArr;
    }
  }
  return sum;
}

// 22
function thisLengthThatValue(num1, num2) {
  var newArray = [];

  for (var i = 0; i < num1; i++) {
    newArray.push(num2);
  }
  return newArray;
}

// 23
function addSevenToMost(arr) {
  const newArr = arr.slice(1).map((e) => e + 7);
  return newArr;
}

// 24
const greaterThanSecond = (arr) => {
  if (arr.length > 1) {
    arr = arr.filter((e) => e > arr[1]);
    return arr;
  }
  return false;
};

function swapFirstLast(arr) {
  let first = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = first;
  return arr;
}
