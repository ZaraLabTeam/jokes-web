/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    /**
     * @module addTokenInterceptor
     * Interceptor module that applies the `Authorization` header to outgoing requests
     */

    var interceptors = angular.module('jokesWeb.services');

    interceptors.factory('addTokenInterceptor', [
        '$rootScope',
        addTokenInterceptor
    ]);

    function addTokenInterceptor($rootScope) {
        'use strict';

        return {
            request: outgoingRequest
        };

        function outgoingRequest(request) {

            if (hasAuthToken()) {

                request.headers.Authorization = 'Bearer ' + $rootScope.authToken;
            }

            return request;
        }

        function hasAuthToken() {
            return !!$rootScope.authToken;
        }
    }
})();