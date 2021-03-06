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
    $urlRouterProvider.otherwise('/table');
    $stateProvider
        //桌台页
        .state('table', {
            url: '/table',
            templateUrl: "views/table/table.html",
            controller:'tableCtrl'

        })
        .state('table1', {
            url: 'table1',
            templateUrl: "views/table/table.html",
            controller:'tableCtrl'
        })
        //点菜页
        .state('order', {
            url: '/order',
            templateUrl: "views/order/order.html",
            controller:'orderCtrl'
        })
        //结账页
        .state('pay', {
            url: '/pay',
            templateUrl: "views/pay/pay.html",
            controller:'payCtrl'
        })

        .state('checkout', {
            url: '/checkout',
            templateUrl: "views/pay/checkout.html"
        })
        //送餐页
        .state('meals', {
            url: '/meals',
            templateUrl:'views/meals/meals.html'
        })
        //订单页
        .state('indent', {
            url: '/indent',
            templateUrl: "views/indent/indent.html"
        })
        //统计页
        .state('statistical', {
            url: '/statistical',
            templateUrl: "views/statistical/statistical.html"
        })
        //餐桌设置页
        .state('table-setting', {
            url: '/table-setting',
            templateUrl: "views/table/table-setting.html"
        })
}]);
