/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb')
           .controller('CategoryController', [
               'jokesApi', 'jokes', CategoryController
           ]);

    function CategoryController(jokesApi, category) {

        var vm = this;

        vm.title = category.name;

        vm.jokes = category.jokes;
    }
})();
