AppResidentApp.Views.UserChore = Backbone.View.extend({
  className: 'row',
  template: JST['user_chores/user_chore'],
  render: function(){
     this.$el.html(this.template({user_chore: this.model}));
     return this;
  }
});
