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
      link: 'noticeBoard',
      icon : 'alarm outline'
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
        .when("/noticeBoard", {
            templateUrl: "noticeBoard.html",
            activetab: 'active'
        })
        .otherwise({
          redirectTo:'/noticeBoard'
        });
});
