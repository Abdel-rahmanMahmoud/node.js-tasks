const fs = require('fs');

// // Synchronous Read and Write
// try {
//     const data = fs.readFileSync('read.txt', 'utf8');
//     fs.writeFileSync('write.txt', data);
//     console.log('Synchronous read and write completed.');
// } catch (err) {
//     console.error('Error during synchronous operation:', err);
// }
// console.log('This is the end of the synchronous operation.');
// // Asynchronous Read and Write
// fs.readFile('read.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.error('Error during asynchronous read:', err);
//     }
//     const content = data; // Store the read content in a variable
//     fs.writeFile('write.txt', content, (err) => {
//         if (err) {
//             return console.error('Error during asynchronous write:', err);
//         }
//         console.log('Asynchronous read and write completed.');
//     });
// });

// Stream Read and Write with variable 'chunk'
const readStream = fs.createReadStream('read.txt', 'utf8');
const writeStream = fs.createWriteStream('write.txt');

readStream.on('data', (chunk) => {
    console.log("The chunk read is:", chunk);
    writeStream.write("\n The chunk write is:\n" + chunk);
});


readStream.on('end', () => {
    console.log('Stream read and write completed.');
    writeStream.end();
});