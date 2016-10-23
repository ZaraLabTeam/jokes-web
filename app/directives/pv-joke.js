/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb.directives')
           .directive('pvJoke', pvJoke);

    function pvJoke() {

        return {
            restrict: 'EA',
            templateUrl: '/app/directives/templates/pv-joke.tpl.html',
            scope: {
                joke: '&'
            },
            link: linker
        };

        function linker($scope, el, attr) {

            $scope.joke = $scope.joke();

            $scope.getJokeContent = function () {

                return $scope.joke.content.replace('\n', '<br />');
            };

            $scope.getJokeTimeAgo = function () {

                var timeAgo = moment($scope.joke.createdOn).fromNow();

                return timeAgo;
            };

            $scope.getJokeAuthor = function () {

                if ($scope.joke.createdBy) {
                    return $scope.joke.createdBy;
                }
                else {
                    return 'Анонимен';
                }
            }
        }
    }

})();
