const express = require('express');

const app = express();

app.use(express.static('public'));

console.log('=========================');
console.log(process.env);

app.listen(7990, () => {
  console.log('Listening on port 7990');
});
