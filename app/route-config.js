/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb')
           .config([
               '$stateProvider', '$urlRouterProvider', '$locationProvider', routeConfig
           ]);

    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/home/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })

            .state('register', {
                url: '/register',
                templateUrl: '',
                controller: 'RegisterController',
                controllerAs: 'vm'
            })

            .state('login', {
                url: '/login',
                templateUrl: '/app/login/login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })

            .state('category', {
                url: '/category/{name}',
                templateUrl: '/app/list/jokeList.tpl.html',
                controller: 'CategoryController',
                controllerAs: 'vm',
                resolve: {
                    jokes: ['$stateParams', 'categoriesApi', function ($stateParams, categoriesApi) {
                        return categoriesApi.getByName($stateParams.name);
                    }]
                }
            })

            .state('joke', {
                abstract: true,
                url: '/joke',
                template: '<ui-view></ui-view>'
            })

            .state('joke.single', {
                url: '/{id}',
                templateUrl: '',
                controller: 'ViewJokeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }
})();