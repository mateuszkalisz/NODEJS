// const add = (x,y) => x + y;

// const division = (num1, num2) => num1 / num2;

// const math = (a,b, callback) => {
//     console.log(callback(a, b))
// };

// math(5, 2, add);
// math(4,2, division);

// setTimeout(()=>console.log("Co u Ciebie"), 2000);
// console.log("hej!");

const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error, file)=>{
if(error) console.log("nie ma takiego pliku");
else console.log(file);
})