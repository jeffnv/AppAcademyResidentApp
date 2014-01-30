AppResidentApp.Views.UserChore = Backbone.View.extend({
  tagName: 'ul',
  template: JST['user_chores/user_chore'],
  render: function(){
     this.$el.html(this.template({user_chore: this.model}));
     return this;
  }
});
