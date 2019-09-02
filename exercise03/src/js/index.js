
import style from '../scss/styles.scss';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import angular from 'angular';

// loads the UIKIT Icon plugin
UIkit.use(Icons);



angular.module('formApp', [])
  .controller('formController', ['$scope','$log', function($scope, $log) {
    $scope.userData = {};
    //AID TO PREVENT SPAM IN FORMS
    $scope.zipRegex = /(?!.*)/;

    $scope.submitForm = function(isValid, user) {
      $scope.userData =  angular.copy(user);
      if (isValid) {
        $log.info("Processed!", user);
      }
      
    }

    $scope.reset = function(form) {
      $scope.user = angular.copy($scope.userData);
    };

    $scope.reset();
  }]);