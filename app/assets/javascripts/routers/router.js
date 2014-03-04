AppResidentApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  routes: {
    '': 'index',
    'chores': 'choreIndex',
    'chores/:id': 'choreShow',
  },
  index: function () {
    var indexView = new AppResidentApp.Views.UserChoresIndex({
      collection: AppResidentApp.userChores
    });
    this._swap(indexView);
  },
  choreIndex: function () {
    var choreIndex = new AppResidentApp.Views.ChoreIndex({
      collection: AppResidentApp.chores
    });
    this._swap(choreIndex);
  },
  choreShow: function (id) {
               //stuff goes here
  },
  _swap: function (newView) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = newView;
    this.$rootEl.html(this._currentView.render().$el);
  }
})
