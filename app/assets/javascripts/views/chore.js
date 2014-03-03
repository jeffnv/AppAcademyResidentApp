AppResidentApp.Views.Chore = Backbone.View.extend({
  tagName: 'li',
  template: JST['chores/chore'],
  events: {
    'click a.chore-link': 'choreClicked'
  },
  render: function () {
    this.$el.html(this.template({
      choreName: this.model.escape('name')
    }));

    return this;
  },

  choreClicked: function (event) {
    alert('clicked ' + this.model.escape('name'));
  },
});
