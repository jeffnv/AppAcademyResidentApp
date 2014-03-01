AppResidentApp.Views.UserShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(AppResidentApp.users, "change add sync", this.render);
  },
  template: JST['users/show'],
  render: function(){
    this.$el.html(this.template({
      user: this.model
    }));

    return this;
  }

});
