AppResidentApp.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  index: function () {
    alert('welcome to the chores');
  }
})
