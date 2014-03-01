AppResidentApp.Views.ChoreIndex = Backbone.View.extend({
 initialize: function(){
    this.listenTo(this.collection, "change add sync", this.render);
  },
 template: JST['chores/chore_index'],
  render: function(){
    console.log("chore index has rendered");
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
