<!--Question 01-->
console.log("Hello world");

<!--Question 02-->
const os=require('os');

console.log('Architecture'+os.arch());
console.log('CPUs'+os.cpus().length);
console.log('Platform'+os.platform());

<!--Question 03-->
const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});

const data = fs.readFileSync(fileName);
console.log(data.toString());

<!--Question 04-->
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});

<!--Question 05-->
const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);



const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method)
    {
        case 'GET':
            res.write('<h1>Hello World</h1>');
    res.end();
    break;

    case 'POST':
        req.on('data', data => {
            res.write('<h1>Hello ' + data + '</h1>');
            res.end();
        });
        break;

        case 'PUT':
            res.read
    }

}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});