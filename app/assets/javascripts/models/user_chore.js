AppResidentApp.Models.UserChore = Backbone.Model.extend({

  choreName: function(){
    return AppResidentApp.chores.get(this.get('chore_id')).escape('name');
  },

  assigned: function(){
    return this.get('user_id') ? true : false;
  },

  userName: function(){
    var userName = "none";
    if(this.assigned()){
      userName = AppResidentApp.users.get(this.get('user_id')).escape('name');
    }
    return userName;
  }

});
