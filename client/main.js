Template.students.onCreated(function() {

});

Template.students.helpers({
  students() {
    return [{
      firstname: 'Michael',
      lastname: 'Chen',
      email: 'michael@hackhub.com',
      age: 25
    }, {
      firstname: 'Yan',
      lastname: 'Hong',
      email: 'yan@hackhub.com',
      age: 25
    }];
  },
});

Template.students.events({

});
