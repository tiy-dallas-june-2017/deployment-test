const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/people', {
  useMongoClient: true
});

require('dotenv').config();

const Person = require('./models/Person');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

console.log(process.env.NODE_ENV);

const mustache = mustacheExpress();
if (process.env.NODE_ENV === 'development') {
  mustache.cache = null;
}
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

app.use(express.static('public'));


app.post('/addperson', (req, res) => {
  //save in mongoose
  const person = new Person();
  person.firstName = req.body.firstName;
  person.lastName = req.body.lastName;
  person.save((err, person) => {
    console.log('I created', person);
    res.redirect('/');
  });

  //redirect back to index page
});

app.get('/people', (req, res) => {
  Person.find({}, (err, people) => {
    res.json(people);
  });
});



app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
