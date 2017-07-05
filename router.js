/**
 * Created by Weetao on 2017-05-16.
 */
var app = angular.module('myApp', [
    'ui.router','ionic'
]);
angular.module('myApp').config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //ionic全局配置
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    //路由配置
    $urlRouterProvider.otherwise('/');
    $stateProvider
        //首页
        .state('main', {
            url: '/',
            templateUrl: "views/main.html",
            controller:'mainCtrl'
        })
}]);
