const express = require('express');

const app = express();

app.use(express.static('public'));

console.log('=========================');
console.log(process.env);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
