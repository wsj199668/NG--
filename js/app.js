//第一步，创建我们的启动模块routerApp模块

var routerApp = angular.module('routerApp',['ui.router','loginApp','pageList','xg.page','addCont','modifyCont','showCont']);

routerApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    //当用户打开整个项目的时候，ui-view中显示的是home.html内容
        .state('index',{
            url:'/index',
            views:{
                '':{
                    templateUrl:'tpls/home.html'
                },
                'main@index':{
                    templateUrl:'tpls/login.html'
                }
            }
        })
        //文章列表页面
        .state('list',{
            url:'/{type:[0-9]{1,4}}',
            views:{
                '':{
                    templateUrl:'tpls/list.html'
                },
                'type@list':{
                    templateUrl:'tpls/type.html'
                },
                'grid@list':{
                    templateUrl:'tpls/grid.html'
                }
            }
        })
        .state('add',{
            url:'/add',
            views:{
                '':{
                    templateUrl:'tpls/add.html'
                },
                'type@add':{
                    templateUrl:'tpls/type.html'
                },
                'addcon@add':{
                    templateUrl:'tpls/addcon.html'
                }
            }
        })
        .state('modify',{
            url:'/modify/:Id',
            views:{
                '':{
                    templateUrl:'tpls/modify.html'
                },
                'type@modify':{
                    templateUrl:'tpls/type.html'
                },
                'modifycon@modify':{
                    templateUrl:'tpls/modifycon.html'
                }
            }
        })
        .state('show',{
            url:'/show/:Id',
            views:{
                '':{
                    templateUrl:'tpls/show.html'
                },
                'type@show':{
                    templateUrl:'tpls/type.html'
                },
                'showcon@show':{
                    templateUrl:'tpls/showcon.html'
                }
            }
        })
});