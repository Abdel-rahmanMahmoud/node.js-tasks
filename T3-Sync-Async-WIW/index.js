import { performance } from 'perf_hooks';
import crypto from 'node:crypto';
import os from 'os';

// Start measuring performance
const start = performance.now();

// // هاض sync المتزامن بسنجل ثريد
// // Example using pbkdf2sync to measure performance
// crypto.pbkdf2Sync('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(`Derived key: ${derivedKey.toString('hex')}`);

//     // End measuring performance
//     const end = performance.now();
//     console.log(`Execution time: ${end - start} milliseconds`);
// });
// // Example using pbkdf2sync to measure performance
// crypto.pbkdf2Sync('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(`Derived key: ${derivedKey.toString('hex')}`);

//     // End measuring performance
//     const end = performance.now();
//     console.log(`Execution time: ${end - start} milliseconds`);
// });
// // Example using pbkdf2sync to measure performance
// crypto.pbkdf2Sync('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(`Derived key: ${derivedKey.toString('hex')}`);

//     // End measuring performance
//     const end = performance.now();
//     console.log(`Execution time: ${end - start} milliseconds`);
// });

// هاض async  بسنجل بثرد بول لماكسمم  4 يعني لو عندي  8 يوزر او ريكويست  كل ثريد بوخذ 2 واللي ممكن تعديله 

// Set the thread pool size to 5
process.env.UV_THREADPOOL_SIZE = 5;
//  بشكل افتراضي، Node.js يستخدم حجم ثريد بول 4 للعمليات غير المتزامنة مثل `crypto.pbkdf2`. 
// زيادة حجم الثريد بول إلى 5 يسمح للنظام بمعالجة مهام متزامنة أكثر، مما يحسن الأداء 
// في حالات وجود عمليات غير متزامنة متعددة تعمل في نفس الوقت.
// لمعرفة عدد الأنوية في جهازك، يمكنك استخدام وحدة os في Node.js

const cpuCount = os.cpus().length;
console.log(`Number of CPU cores: ${cpuCount}`);

// انا عندي 4 فما رح يزبط شوف المهمه الخامسة كم وقتها

// Example using pbkdf2 to measure performance
crypto.pbkdf2('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    // End measuring performance
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`);
});
// Example using pbkdf2 to measure performance
crypto.pbkdf2('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    // End measuring performance
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`);
});
// Example using pbkdf2 to measure performance
crypto.pbkdf2('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    // End measuring performance
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`);
});
// Example using pbkdf2 to measure performance
crypto.pbkdf2('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    // End measuring performance
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`);
});
// Example using pbkdf2 to measure performance
crypto.pbkdf2('mySecretPassword', 'mySalt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    // End measuring performance
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`);
});
