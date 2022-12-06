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

const arr = async () => {}

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
test();

async function logFiles() {
  // fs.readdir(__dirname)
  //   .then((filesArr) => {
  //     const hiddenFiles = filesArr.filter((fileName) => fileName[0] === '.');
  //     return hiddenFiles;
  //   })
  //   .then((files) => console.log(files));

  const filesArr = await fs.readdir(__dirname);
  const hiddenFiles = filesArr.filter((fileName) => fileName[0] === '.');
  console.log(hiddenFiles);
}

// logFiles();
// test().then((data) => console.log(data));
