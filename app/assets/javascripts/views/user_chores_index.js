AppResidentApp.Views.UserChoresIndex = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(this.collection, "all", this.render);
  },
  template: JST["user_chores/index"],
  events: {
   'click input#submit-new-chore': 'createChore',
   'click #assign-all-button': 'assignAll'
  },
  render: function(){
    var that = this;
    var admin = AppResidentApp.user.admin;
    this.$el.html(this.template({ admin: admin }));
    this.collection.each(function(user_chore){
      that.$el.append(new AppResidentApp.Views.UserChore({
          model: user_chore
      }).render().$el)
    });
    return this;
  },
 
  createChore: function(event){
    event.preventDefault();
    console.log("creating a chore");
    var choreData = $(event.target).closest("form").serializeJSON();
    var newChore = new AppResidentApp.Models.Chore(choreData);
    newChore.save({}, {
      success: function(model){
        that.collection.add(model);
        console.log("success!");
               },
      error: function(model, response, thirdThing){
        console.log("error! ", response, thirdThing);
             }
    });
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
