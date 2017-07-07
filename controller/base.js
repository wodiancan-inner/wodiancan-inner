/**
 * Created by Weetao on 2017-05-16.
 */
// var app = angular.module('myApp', []);
'use strict';
var app = angular.module('myApp', ['ionic']);
angular.module('myApp').controller('baseCtrl',['$scope',function ($scope) {
    $scope.isShow=false;
    // $scope.changeMenuStatus=function(){
    //    $scope.isShow=!$scope.isShow;
    // }
    // console.log($scope.text);
    // jQuery('ul').css('background','red');
    // jQuery('.setting').on('click',function(){
    //     alert();
    //     $scope.isShow=!$scope.isShow;
    // });
    // $('body').not(".setting").on('click',function(){
    //     if ($scope.isShow == false){
    //         alert(222);
    //         return;
    //     }else{
    //         $scope.isShow = false;
    //     }
    //     // $scope.$apply();
    // })
}]);
