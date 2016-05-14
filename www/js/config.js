angular.module('ionicApp').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('eventmenu.glossary', {
        url: "/glossary",
        controller: 'GlossaryCtrl',
        views: {
          'menuContent': {
            templateUrl: "templates/glossary.html",
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
      })
      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        //controller: 'LoginCtrl',
      })
      .state('eventmenu.glossary-item', {
        url: "/glossary/:id",
        views: {
          'menuContent': {
            templateUrl: "templates/glossary-item.html",
            controller: 'GlossaryCtrl',
          }
        }
      })
      .state('eventmenu.resources', {
        url: "/resources",
        views: {
          'menuContent': {
            templateUrl: "templates/resources.html",
            //controller: 'GlossaryCtrl',
          }
        }
      })
      .state('eventmenu', {
        url: "/event",
        abstract: true,
        templateUrl: "templates/event-menu.html"
      })
      .state('eventmenu.home', {
        url: "/home",
        views: {
          'menuContent': {
            templateUrl: "templates/home.html",
          }
        }
      })
      .state('eventmenu.checkin', {
        url: "/check-in",
        views: {
          'menuContent': {
            templateUrl: "templates/check-in.html",
            controller: "CheckinCtrl"
          }
        }
      })
      .state('eventmenu.attendees', {
        url: "/attendees",
        views: {
          'menuContent': {
            templateUrl: "templates/attendees.html",
            controller: "AttendeesCtrl"
          }
        }
      })

    $urlRouterProvider.otherwise("/login");
  })