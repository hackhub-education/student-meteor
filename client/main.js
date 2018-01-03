Template.students.onCreated(function() {

});

Template.students.helpers({
  students() {
    return Students.find({ userId: Meteor.userId() }).fetch();
  },
});

Template.students.events({
  'submit form'(e) {
    e.preventDefault();
    const target = e.target;
    const student = {
      userId: Meteor.userId(),
      firstname: target.firstname.value,
      lastname: target.lastname.value,
      email: target.email.value,
      age: target.firstname.value,
    };
    
    Meteor.call('students.add', student, (err, res) => {
      if(err){
        alert(err);
      } else {
        alert(res.result)
      }
    });
  },
  'click .deleteStudent'() {
    const studentId = this._id;
    Meteor.call('students.remove', studentId, (err, res) => {
      if(err){
        alert(err);
      } else {
        alert(res.result)
      }
    });
  }
});
