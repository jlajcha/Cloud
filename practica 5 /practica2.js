const fs = require('fs');
const filename = 'unArchivo.txt';

function processFile(readContent) {
   console.log('Processing my file');
   console.log('file size: ', readContent.length);
}
try {
   let content = fs.readFileSync(filename);
   console.log('The file was correctly read.');
   processFile(content);
}
catch (exception) {
   console.log('Ouch! Error!!');

}
console.log('Running the last line of main file')


// function processFile(readContent) {
//    console.log('Processing my file');
//    console.log('file size: ', readContent.length);
// }

// fs.readFile(filename, (err, data) => {
//    if (err) {
//        console.log('Ouch! Error!');
//        throw err;
//    }
//    console.log('The file was correctly read.');
//    processFile(data);
// });

// console.log('Running the last line of main file')