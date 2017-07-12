/**
 * Created by Weetao on 2017-05-16.
 */
// var app = angular.module('myApp', []);
// 'use strict';
// var app = angular.module('myApp');
angular.module('myApp').controller('baseCtrl',['$scope',function ($scope) {
    $scope.isShow = false;
    $scope.changeMenuStatus = function () {
        $scope.isShow = !$scope.isShow;
        $('.setting').attr('background-color','#35b6d98');
    }
}]);
