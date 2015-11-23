var App = blocks.Application({
  history: 'pushState'
});

var GlobalModel = App.Model({
  value: blocks.observable(0),
  init: function () {
    var self = this;
    var timer = setInterval(function () {
      var currentValue = self.value;
      self.value(++currentValue);
    }, 1000);
  }
});

        App.View('Global', {
          options: {
            url: 'views/global.html'
          },
          ready: function () {
            console.log("on");
          },
          value: GlobalModel()
        
        });


// var Article = App.Model({
// 		visible: blocks.observable(),
// });

var Articles = App.Collection({
		options: {
      read: {
        url: '/articles.json'
      }
		}
});

        App.View('Home', {
          options: {
            route: '/',
            url: 'views/home.html',
          },
          //news: Articles([{ foo: 'bar' }])
          news: Articles(),
          ready: function () {
            console.log("on2", Articles().read());
            
            
          },
        });




App.View('About', {
  options: {
    route: '/about',
    url: 'views/about.html'
  }

});

App.View('Contact', {
  options: {
    route: '/contact',
    url: 'views/contact.html'
  }

});