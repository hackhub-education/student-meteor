Template.students.onCreated(function() {

});

Template.students.helpers({
  students() {
    return Students.find().fetch();
  },
});

Template.students.events({
  'submit form'(e) {
    e.preventDefault();
    const target = e.target;
    const student = {
      firstname: target.firstname.value,
      lastname: target.lastname.value,
      email: target.email.value,
      age: target.firstname.value,
    }
    
    // only insert data from client in development
    Students.insert(student);
  },
  'click .deleteStudent'() {
    const studentId = this._id;
    Students.remove(studentId);
  }
});
