//start of Index page config
var adminDashboard = angular
    .module('adminDashboard', ["ngRoute"]);
    adminDashboard.controller('sidebar', function($scope) {
    $scope.pageList = [{
        pageName: 'Notice Board',
        link: 'noticeBoard',
        icon : 'alarm outline'
    }, {
        pageName: 'Page2',
        link: 'studentsScreening',
        icon: 'edit'
    }];
});
//end of index page config

//Statistics - start
adminDashboard.controller('Statistics' , function($scope) {

});
//Statistics - end


//studentsScreen - start
adminDashboard.controller('studentsScreen' , function($scope) {

});
//studentsScreen - end

//noticeBoard - start
adminDashboard.controller('noticeBoard' , function($scope) {

});
//noticeBoard - end

//page Routing
adminDashboard.config(function($routeProvider) {
    $routeProvider
        .when("/studentsScreening", {
            templateUrl: "filteringStudents.html",
            activetab: 'active'
        })
        .when("/noticeBoard", {
            templateUrl: "noticeBoard.html",
            activetab: 'active'
        })
});
