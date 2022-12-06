const fs = require('fs/promises');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 2000);
// });

// promise
//   .then((resultOfPromise) => {
//     console.log(resultOfPromise);
//     return resultOfPromise ** 2;
//   })
//   .then((data) => {
//     console.log(data);
//     return data + 5;
//   })
//   .then((data) => {
//     console.log(data);
//   });

const arr = async () => {};

async function test() {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(Promise.reject(50)), 2000);
    });

    const data = await promise;
    throw new Error();
    console.log(data);
  } catch (error) {
    console.log('error handled');
  }
}
// test();

async function logFiles() {
  // fs.readdir(__dirname)
  //   .then((filesArr) => {
  //     const hiddenFiles = filesArr.filter((fileName) => fileName[0] === '.');
  //     return hiddenFiles;
  //   })
  //   .then((files) => console.log(files));

  const filesArr = await fs.readdir(__dirname);
  const hiddenFiles = filesArr.filter((fileName) => fileName[0] === '.');

  return hiddenFiles;
}

// технически разрешено
// const names = await logFiles();
// console.log(names);

// logFiles();
// test().then((data) => console.log(data));

function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumOfThree(3, 4, 5));

function curriedSum(num1) {
  return function inner1(num2) {
    return function inner2(num3) {
      return num1 + num2 + num3;
    };
  };
}

const inner1 = curriedSum(3);
const inner2 = inner1(4);
const res = inner2(5);

const res2 = inner2(10);
console.log(res);
console.log(res2);

function calcCartCost(discount, price, amount) {
  return price * amount - price * amount * discount;
}

console.log(calcCartCost(0.1, 1000, 5));

function curriedCalcCartCost(discount) {
  return function (price) {
    return function (amount) {
      return price * amount - price * amount * discount;
    };
  };
}

const with10PercentDiscount = curriedCalcCartCost(0.1);

const withPrice1000And10PercentDiscount = with10PercentDiscount(1000);
const withPrice2000And10PercentDiscount = with10PercentDiscount(2000);

// const res1 = withPrice1000And10PercentDiscount(5);
const res1 = withPrice2000And10PercentDiscount(5);
console.log(res1);
