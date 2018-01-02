Students = new Mongo.Collection('students');

Students.schema = new SimpleSchema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  age: { type: String }
});

// need to install aldeed:collection2
Students.attachSchema(Students.schema);

// populate database on server when it is empty
if(Meteor.isServer && Students.find().count() === 0) {
  Students.insert({
    firstname: 'Michael',
    lastname: 'Chen',
    email: 'michael@hackhub.com',
    age: '25'
  });
  
  Students.insert({
    firstname: 'Yan',
    lastname: 'Hong',
    email: 'yan@hackhub.com',
    age: '25'
  });
}