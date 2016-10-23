/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb.services')
           .service("categoriesApi", [
               "httpRequester", CategoriesApi
           ]);

    function CategoriesApi(requester) {

        var CATEGORIES_PATH = '/categories';

        this.getAll = function () {

            return requester.get(CATEGORIES_PATH);
        };

        this.getByName = function (name) {

            return requester.get(CATEGORIES_PATH + '/' + encodeURI(name));
        }
    }
})();
