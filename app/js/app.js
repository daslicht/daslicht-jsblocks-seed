var App = blocks.Application({
  history: 'pushState'
});


var  Global = blocks.observable(1)
  
App.View('Global', {
  options: {
    url: 'views/global.html'
  }
});


App.View('Home', {
  options: {
    route: '/',
    url: 'views/home.html'
  }
  ,global: Global
});

App.View('About', {
  options: {
    route: '/about',
    url: 'views/about.html'
  }
  ,global: Global
});

App.View('Contact', {
  options: {
    route: '/contact',
    url: 'views/contact.html'
  }
  ,global: Global
});