AppResidentApp.Views.UserChoresIndex = Backbone.View.extend({
  template: JST["user_chores/index"],
  events: {
    'click #assign-all-button': 'assignAll'
  },
  render: function(){
    var that = this;
    this.$el.html(this.template());
    this.collection.each(function(user_chore){
      that.$el.append(new AppResidentApp.Views.UserChore({
          model: user_chore
      }).render().$el)
    });
    return this;
  },

  assignAll: function(event){
    var unassignedChores = AppResidentApp.userChores.where({user_id: null});
    var unassignedIds = _.map(unassignedChores, function(uc){ return uc.id });
    $.ajax({
      url: 'user_chores/assign_group',
      type: 'POST',
      data: {
        user_chore_ids: unassignedIds,
        random: true
      },
      success: function(data){
        alert('ajax worked');
      }
   });
 }
});
