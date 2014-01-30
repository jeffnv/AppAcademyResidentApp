AppResidentApp.Views.UserChoresIndex = Backbone.View.extend({
  template: JST["user_chores/index"],
  render: function(){
    var that = this;
    this.$el.html(this.template());
    this.collection.each(function(user_chore){
      that.$el.append(new AppResidentApp.Views.UserChore({
          model: user_chore
      }).render().$el)
    });
    return this;
  }
});
