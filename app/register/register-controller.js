/**
 * Created by kidroca on 21.10.2016 г..
 */

(function () {
    'use strict';

    angular.module('jokesWeb')
           .controller('RegisterController', [
               '$rootScope', 'ngToast', 'authApi', RegisterController
           ]);

    function RegisterController($rootScope, ngToast, authApi) {

        var vm = this;

        vm.register = function ($registerForm, authApi) {

            if ($registerForm.valid) {

            }
        }
    }

})();
