const http = require('http');
const express = require('express');
const { fibonacci } = require('./functions/fibo');

const port = 3000;
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    const text = "\n ********* NEW TEXT ******";
    res.send('The fibonacci of 10 is ' + fibonacci(10) + " And for 20:"+ fibonacci(20) + text);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});