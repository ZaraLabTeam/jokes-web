/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb')
           .controller('LoginController', [
               '$rootScope', '$state', 'ngToast', 'authApi', LoginController
           ]);

    function LoginController($rootScope, $state, ngToast, authApi) {

        var vm = this;
        vm.user = {};

        vm.login = function ($loginForm) {

            if ($loginForm.$valid) {
                $loginForm.$setPristine();

                authApi.logIn(vm.user)
                       .then(successLogin)
                       .catch(errorLogin);
            }
        };

        function successLogin(result) {
            $rootScope.authToken = result.access_token;
            $rootScope.user = authApi.parseJwt(result.access_token).unique_name;
            ngToast.success('Добре дошли');
            $state.go('home');
        }

        function errorLogin(error) {
            ngToast.danger('Грешка при вписване - невалидни данни');
        }
    }
})();
