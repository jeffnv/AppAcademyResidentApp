AppResidentApp.Views.ChoreIndex = Backbone.View.extend({
  template: JST['chores/chore_index'],
  render: function(){
    this.$el.html(this.template());
    var $el = this.$el;
    this.collection.each(function(chore){
      $el.find('#chore-list').append(
        new AppResidentApp.Views.Chore({
          model: chore
        }).render().$el
      );
    });
    return this;
  }
});
