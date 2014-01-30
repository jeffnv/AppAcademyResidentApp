AppResidentApp.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  routes: {
    '': 'index',
  },
  index: function () {
    var indexView = new AppResidentApp.Views.UserChoresIndex({
      collection: AppResidentApp.userChores
    });
    this._swap(indexView);
  },
  _swap: function(newView){
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = newView;
    this.$rootEl.html(this._currentView.render().$el);
  }
})
