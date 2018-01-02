Template.students.onCreated(function() {

});

Template.students.helpers({
  students() {
    return Students.find().fetch();
  },
});

Template.students.events({

});
