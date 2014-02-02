window.AppResidentApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //make a collection of user chores
    //on success, do the following
    AppResidentApp.users = new AppResidentApp.Collections.Users(
        AppResidentApp.users
    );
    AppResidentApp.userChores = new AppResidentApp.Collections.UserChores();
    AppResidentApp.userChores.fetch({success: function(){
    new AppResidentApp.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
    }});

  }
};

