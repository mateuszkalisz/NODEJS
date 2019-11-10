const path = require('path');

// const fileToPath = path.join(__dirname, 'path.js');
// console.log(fileToPath);

// const anotherPath = path.join('/razdwa/trzy', 'cztery', 'piec.js');
// console.log(anotherPath);

// const parse = path.parse(__filename);
// console.log(parse);

// const parse2 = path.parse(path.join(__dirname, 'path.js'));
// console.log(parse2);

// const filetoPath2 = path.join(__filename);
// console.log(filetoPath2);

// const extName = path.extname('blabla.js');
// console.log(extName)

const absol = path.isAbsolute('./razdwa.js');
const absol2 = path.isAbsolute('/razdwa.js');
console.log(absol);
console.log(absol2);