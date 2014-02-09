AppResidentApp.Views.ChoreIndex = Backbone.View.extend({
  template: EJS['chores/chore_index'],
  render: function(){
    this.html(this.template());
    return this;
  }
});
