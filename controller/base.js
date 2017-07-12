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
        if($scope.isShow){
            $('.setting').css({'backgroundColor':'#5b6d98','backgroundImage':'url(images/subnav-list.png)'});
        }else{
            $('.setting').css({'backgroundColor':'','backgroundImage':'url(images/HeaderDropdownIcon.png)'});
        }
    }
}]);
