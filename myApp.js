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

var arrayOfPeople = [{name:'Mip enis', age: 62, favoriteFoods: ['Bread','Water']}, {name:'Ben Dover', age: 21, favoriteFoods: ['Nut','Orange']}]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err,people) => {
    if (err) return done(err);    
    done(null, people);
  })
};

var personName = 'Mip enis';

const findPeopleByName = (personName, done) => {
  Person.find({name : personName}, (err,person) => {
    if (err) return done(err);
    done(null, person);
  });
};

var food = 'Orange';

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food}, (err,foodFound) => {
    if(err) return done(err);
    done(null,foodFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err,data) => {
    if(err) return done(err);
    done(null,data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err,data) => {
    if(err) return done(err);
    data.favoriteFoods.push(foodToAdd);

    data.save((err,updateData) => {
      if(err)return done(err);
      done(null,updateData);
    })
  })
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
