/**
 * Created by Weetao on 2017-07-19.
 */
angular.module('myApp').controller('orderCtrl',['$scope',function ($scope) {
    $scope.isOrder = false;
    $scope.addOrder= function () {
        $scope.isOrder = true;
    }
}]);
