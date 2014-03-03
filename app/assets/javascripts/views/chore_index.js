AppResidentApp.Views.ChoreIndex = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
  },
  template: JST['chores/chore_index'],
  modal: JST['chores/chore_modal'],
  events: {
    'click #create-chore': 'createChore',
    'click #show-chore-modal': 'showChoreModal'
  },

  createChore: function () {
    var choreData = $('#chore-form').serializeJSON();
    var that = this;
    if(choreData.frequency){
      choreData.chore.frequency = choreData.frequency.toString();
    }else{
      choreData.chore.frequency = "";
    }
    this.hideModal(function(){
      that.collection.create(choreData, {
        success: function (data) {}
      });
    });
  },

  showChoreModal: function () {
    $('#chore-modal').modal();
  },

  hideModal: function (callback) {
    var modal = $('#chore-modal');
    modal.modal('hide');
    modal.on('hidden.bs.modal', function(){
      modal.off('hidden.bs.modal');
      callback();
    });
  },

  render: function () {
    this.$el.html(this.template());
    var $el = this.$el;
    this.$el.append(this.modal());
    this.collection.each(function (chore) {
      $el.find('#chore-list').append(
        new AppResidentApp.Views.Chore({
          model: chore
        }).render().$el
      );
    });
    return this;
  }
});
