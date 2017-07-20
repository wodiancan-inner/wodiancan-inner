/**
 * Created by Weetao on 2017-07-20.
 */
angular.module('myApp').controller('tableCtrl',['$scope','$location',function ($scope,$location) {
    $scope.toRedirect= function () {
        $location.path('order');
    }
}]);