/**
 * Created by Weetao on 2017-07-20.
 */
angular.module('myApp').controller('payCtrl',['$scope','$location',function ($scope,$location) {
    $scope.toCheckout= function () {
        $location.path('checkout');
    }
}]);