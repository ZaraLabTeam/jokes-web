/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb')
        .controller('AppController', [
            '$rootScope', AppController
        ]);

    function AppController($rootScope) {

        var main = this;

        Object.defineProperties(main, {

            user: {
                get: function () {
                    return $rootScope.user;
                }
            }
        });

        main.isLoggedIn = function () {
            return !!$rootScope.authToken;
        }
    }

})();