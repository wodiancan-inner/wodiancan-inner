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
        //桌台页
        .state('table', {
            url: '/',
            views:{
                'table':{
                    templateUrl: "views/table/table.html"
                    // controller:'orderCtrl'
                }
            }
        })
        //点菜页
        .state('order', {
            url: 'order',
            views:{
                'order':{
                    templateUrl: "views/order/order.html"
                    // controller:'orderCtrl'
                }
            }
        })
        //结账页
        .state('pay', {
            url: 'pay',
            views:{
                'pay':{
                    templateUrl: "views/pay/pay.html"
                    // controller:'orderCtrl'
                }
            }
        })
        //送餐页
        .state('meals', {
            url: 'meals',
            views:{
                'meals':{
                    templateUrl:'views/meals/meals.html'
                    // controller:'orderCtrl'
                }
            }
        })
        //订单页
        .state('indent', {
            url: 'indent',
            views:{
                'indent':{
                    templateUrl: "views/indent/indent.html"
                    // controller:'orderCtrl'
                }
            }
        })
        //统计页
        .state('statistical', {
            url: 'statistical',
            views:{
                'statistical':{
                    templateUrl: "views/statistical/statistical.html"
                    // controller:'orderCtrl'
                }
            }
        })
}]);
