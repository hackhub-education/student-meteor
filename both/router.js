Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  name: 'home',
  template: 'students'
});

Router.route('/student/:_id', {
  name: 'detail',
  template: 'detail',
  data: function () {
    return Students.findOne({_id: this.params._id});
  },
});