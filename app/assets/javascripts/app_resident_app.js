window.AppResidentApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //make a collection of user chores
    //on success, do the following
    AppResidentApp.users = new AppResidentApp.Collections.Users();
    AppResidentApp.users.fetch({
      success: function(resp){
        console.log("Success!", resp);
               },
      error: function(one, two, three){
        console.log("Error!", one, two, three)}
    });
    AppResidentApp.userChores = new AppResidentApp.Collections.UserChores();
    AppResidentApp.userChores.fetch({success: function(){
      new AppResidentApp.Routers.Router({$rootEl: $('#content')});
    AppResidentApp.chores = new AppResidentApp.Collections.Chores(AppResidentApp.chores);
    Backbone.history.start();
    }});

  }
};

