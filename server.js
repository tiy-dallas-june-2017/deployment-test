const express = require('express');

const app = express();

app.use(express.static('public'));


app.listen(7990, () => {
  console.log('Listening on port 7990');
});
