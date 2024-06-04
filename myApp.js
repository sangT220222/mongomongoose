require('dotenv').config();

let Person;
const mongoose = require('mongoose');
const db_url = process.env.MONGO_URL;
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

//creating schema
const personSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number
  },
  favoriteFoods:{
    type: [String]
  }
})

//creating model
Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var person1 = new Person({name:'Sam Smith', age: 69, favoriteFoods: ['Nut','Apple']});
  person1.save(function(err,data){
    if (err) return done(err);    
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
