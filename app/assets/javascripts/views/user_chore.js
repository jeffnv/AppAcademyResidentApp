AppResidentApp.Views.UserChore = Backbone.View.extend({
  className: 'row',
  events:{
    "click .volunteer": "volunteer",
    "click .assign": "assign",
  },
  user_template: JST['user_chores/user_chore'],
  admin_template: JST['user_chores/admin_chore'],
  chore_template: JST['user_chores/chore'],

  render: function(){
    var doc = AppResidentApp.user.admin ? this.admin_template : this.user_template;
    this.$el.html(this.chore_template({ user_chore: this.model }));
    this.$el.append(doc({ user_chore: this.model }));
    return this;
  },
  volunteer: function(event){
    event.preventDefault();
    this.model.save({ 'user_id': AppResidentApp.user.id },{
      success: function(response){
      }
    });
  },
  assign: function(event){
    event.preventDefault();
    alert("assigned");
  }
});
