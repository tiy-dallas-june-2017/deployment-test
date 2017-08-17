const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
