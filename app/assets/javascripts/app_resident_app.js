window.AppResidentApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //make a collection of user chores
    //on success, do the following
    new AppResidentApp.Routers.Router();
    Backbone.history.start();

  }
};

