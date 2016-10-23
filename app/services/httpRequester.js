/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    /**
     * @module backendRequester
     * Http communications facade
     */

    var backend = angular.module('jokesWeb.services');

    backend.factory('httpRequester', [
        '$http', 'appConfig',
        httpRequester
    ]);

    function httpRequester($http, appConfig) {
        'use strict';

        return {
            get: get,
            post: post
        };

        /**
         * @param {String} path - relative path (excluding base api path)
         * @param {object} [query] - plain js data object of key/value pairs
         * @returns {*} Returns a promise
         */
        function get(path, query) {
            var url = _normalizePath(appConfig.apiBaseUrl, path);

            return $http.get(url, query)
                        .then(_returnData);
        }

        /**
         * @param {String} path - relative path (excluding base api path)
         * @param {object} query - plain js data object of key/value pairs
         * @returns {*} Returns a promise
         */
        function post(path, query) {
            var url = _normalizePath(appConfig.apiBaseUrl, path);

            return $http.post(url, query)
                        .then(_returnData);
        }

        function _returnData(response) {
            return response.data;
        }

        function _normalizePath(base, path) {
            if (base[base.length - 1] !== '/') {
                base += '/';
            }

            if (path[0] === '/') {
                return base + path.substring(1);
            }
            else if (path.indexOf('./') === 0) {
                return base + path.substring(2);
            }
            else {
                return base + path;
            }
        }
    }
})();