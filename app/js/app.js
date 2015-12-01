/* global blocks */
var App = blocks.Application({
  history: 'pushState'
});

/*
Read with Grt Parameter
var Page = App.Model({
    options: {
        url: '/blogpost?page={{page}}'
    },
//
});
var page = Page().read({page: 10});
*/



var GlobalModel = App.Model({
  value: blocks.observable(0),
  init: function () {
    var self = this;
    var timer = setInterval(function () {
      // You should always call the observable to get it's value in javascript.
      // It workd here as with the ++ operations the observable function will get called it's 'toString()' function and 
      // that string will be castet to a number. But this is not a clean way and can lead to hard to find issues.
      // SO better call it here
      var currentValue = self.value();
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


var Article = App.Model({
  title: App.Property(),
  author: App.Property(),
  options: {
    create: {
      url: 'http://ansolas.de:3000/todos'
    }
  }

});
// An Collection needs a model to map the stuff on.
var Articles = App.Collection(Article, {
  options: {
    read: {
      //url: '/articles.json'
      url: 'http://ansolas.de:3000/todos'
    }
  }


});

App.View('Home', {
  options: {
    route: '/',
    url: 'views/home.html',
  },
  news: Articles().read(), //this works
  article: Article(),
  //this.news, //this also works but it has no content to show. 
  //Starts the ajax read request to the colections 'options.read.url'
  ready: function () {
    /*    this.news.add({visible: true, text: 'Some text'});
     /*   this.news.addMany([{
          visible: true,
          text: 'other text'
        },{
          visible: true,
          text: 'Some much text ...'
        }]);*/

  },
  addItem: function () {
    console.log('add', this.article);
    this.news.add(this.article);
    this.article.sync();


  }
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
