'use strict';

// Declare app level module which depends on views, and components
angular.module('jokesWeb', [
    'ngRoute',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngAnimate',
    'ngToast',
    'jokesWeb.services',
    'jokesWeb.directives'
])

       .config(['$httpProvider', function ($httpProvider) {
           $httpProvider.interceptors.push('addTokenInterceptor');
       }])

       .config(['ngToastProvider', function(ngToastProvider) {
           ngToastProvider.configure({
               animation: 'slide', // 'fade'
               verticalPosition: 'top',
               horizontalPosition: 'center',
               dismissButton: true
           });
       }]);
