AppResidentApp.Views.Chore = Backbone.View.extend({
  tagName: 'li',
  template: EJS['chores/chore'],
  render: function(){
    this.$el.html(this.template({
      choreName: this.model.escape('name')
    }));

    return this;
  };
});
