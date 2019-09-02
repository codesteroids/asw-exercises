
import style from '../scss/styles.scss';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import angular from 'angular';

// loads the UIKIT Icon plugin
UIkit.use(Icons);



angular.module('formApp', [])
  .controller('formController', ['$scope', '$log', function($scope, $log) {
    //$log.info('que bien!');
  }]);