//start of Index page config
var adminDashboard = angular.module('adminDashboard',[
  'ngRoute',
  'appFooter',
  'appHeader',
  'createNotice',
  'viewNotices'
]);

adminDashboard.controller('sidebar', function($scope) {
  $scope.pageList = [{
      pageName: 'Notice Board',
      link: '/#/noticeBoard/createNotice',
      icon : 'alarm outline',
      sublist: [{
        pageName:'Create',
        link: '/#/noticeBoard/createNotice'
      },{
        pageName:'Show',
        link:'/#/noticeBoard/showNotice'
      }]
  }];
});
//end of index page config

//noticeBoard - start
adminDashboard.controller('noticeBoard' , function($scope) {

});
//noticeBoard - end

//page Routing
adminDashboard.config(function($routeProvider) {
    $routeProvider
        .when("/noticeBoard/createNotice", {
            template: "<create-notice></create-notice>"
        })
        .when("/noticeBoard/viewNotice", {
            template: "<view-notices></view-notices>"
        })
        .otherwise({
          redirectTo:'/noticeBoard/createNotice'
        });
});
