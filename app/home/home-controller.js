/**
 * Created by kidroca on 21.10.2016 г..
 */
(function () {
    'use strict';

    angular.module('jokesWeb')
           .controller('HomeController', [
               'jokesApi', 'categoriesApi', HomeController
           ]);

    function HomeController(jokesApi, categoriesApi) {

        var vm = this;

        vm.jokes = [];

        vm.categories = [];

        jokesApi.getRandomJokes(3)
                .then(function (jokes) {
                    angular.copy(jokes, vm.jokes);
                });

        categoriesApi.getAll()
                     .then(function (categories) {
                         angular.copy(categories, vm.categories);
                     });
    }
})();