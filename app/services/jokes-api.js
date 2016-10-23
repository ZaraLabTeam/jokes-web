/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb.services')
           .service('jokesApi', [
               'httpRequester', JokesApi
           ]);

    function JokesApi(httpRequester) {

        var JOKES_PATH = '/jokes';

        this.getJoke = function (id) {

            return httpRequester.get(JOKES_PATH + '/' + id);
        };

        this.getJokeList = function (start, end) {

            return httpRequester.get(JOKES_PATH, {start: start, end: end});
        };

        this.createJoke = function (joke) {

            return httpRequester.post(JOKES_PATH, joke);
        };

        this.getRandomJokes = function (count) {

            return httpRequester.get(JOKES_PATH + '/random/' + count);
        }
    }
})();
