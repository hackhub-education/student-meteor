Meteor.publish('students.private', function() {
  if (!this.userId) {
    return this.ready();
  }
  return Students.find({
    userId: this.userId
  });
});