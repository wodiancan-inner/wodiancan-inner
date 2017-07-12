/**
 * Created by Weetao on 2017-07-06.
 */
angular.module('myApp')
//桌台页面之间的切换
    .directive('switchover',function(){
        return {
            restrict: 'AE',
            replace: true,
            link:function (scope,el) {
                $(el).bind('click',function () {
                    $(this).attr("class","active").siblings("li").attr("class","");
                    $(this).parents('ul').parents('nav').siblings("div").eq($(this).index()).show().siblings("div").hide();
                })
            }
        }
    })