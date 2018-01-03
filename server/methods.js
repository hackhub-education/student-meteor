Meteor.methods({
  'students.add'(student) {
    Students.insert(student);
    return { result: 'success' }
  },
  'students.remove'(studentId) {
    Students.remove(studentId);
    return { result: 'success' }
  }
});