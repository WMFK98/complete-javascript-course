const fs = require('fs');
const readFile = function (path, callback) {
    fs.readFile(path, 'utf-8', (err, inputD) => {
        if (err) throw err
        callback(inputD.split('\n'))
    })
}


process.stdin.setEncoding('utf8');
console.log("โปรดป้อนข้อมูล (กด Ctrl+C เพื่อออก):");
process.stdin.on('data', (data) => {
    // นำข้อมูลที่รับมาแปลงเป็นสตริงและแสดงผล
    const input = data.toString();

    if (input === 'readfile') {
        readFile('./input.txt', (data) => {
            console.log(data);
        });
    }
});



