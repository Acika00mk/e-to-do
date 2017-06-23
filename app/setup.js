// Define the `phonecatApp` module
var eaApp = angular.module('ea', ['ui.router']);


eaApp.config(function($stateProvider, $urlRouterProvider) {
  var helloState = {
    name: 'home',
    url: '/home',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

    $urlRouterProvider.when('/', '/home');
});


// Define the `PhoneListController` controller on the `phonecatApp` module
eaApp.controller('homeController', function homeControler() {
  var vm = this;

    vm.welcome = 'Hi all'
});
