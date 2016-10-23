/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb.services')
           .service('authApi', [
               'httpRequester', AuthApi
           ]);

    function AuthApi(requester) {

        this.register = function (userData) {

            return requester.post('/account/register', userData);
        };

        this.logIn = function (credentials) {

            var encoded = 'userName=' + encodeURIComponent(credentials.username) +
                '&password=' + encodeURIComponent(credentials.password) +
                '&grant_type=password';

            return requester.post('/oauth/token', encoded);
        };

        this.parseJwt = function (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        };
    }
})();

