var myMessageApp = angular
                        .module("messageViewInTable",[])
                        .controller("myMessageViewInTable",function($scope){
                            var messages = [
                                {
                                    messageId: 0,
                                    messageTitle : "Dell Drive",
                                    messageBody : "Dell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveDell DriveThis is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
                                    messageAuthor : "Admin",
                                    messageDate : "10th July 2016"
                                },
                                {
                                    messageTitle : "Mu-Sima Drive",
                                    messageBody : "Mu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveMu-Sima DriveThis is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
                                    messageAuthor : "Admin",
                                    messageDate : "26th July 2016"
                                },
                                {
                                    messageId: 2,
                                    messageTitle : "Commvault drive",
                                    messageBody : "Commvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveCommvault driveThis is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
                                    messageAuthor : "XYZ company",
                                    messageDate : "29th July 2016"
                                },
                                {
                                    messageId: 3,
                                    messageTitle : "Book My Show Drive",
                                    messageBody : "Book My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveBook My Show DriveThis is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
                                    messageAuthor : "ABC tutorials",
                                    messageDate : "09th August 2016"
                                },
                                {
                                    messageId: 4,
                                    messageTitle : "Oracle Drive",
                                    messageBody : "Oracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveOracle DriveThis is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
                                    messageAuthor : "ABC tutorials",
                                    messageDate : "19th August 2016"
                                }
                            ];

                            $scope.messages = messages;

                            var messageDisplayed;
                            var messageDisplayedTitle;

                            $scope.removeMessage = function(message){
                                var index = messages.indexOf(message);
                                messages.splice(index,1);
                            };

                            $scope.displayMessage = function(message) {

                                $scope.messageDisplayed = message.messageBody;
                                $scope.messageDisplayedTitle = message.messageTitle;

                                $('#modalid').modal("show");
                            }

                            $scope.messages = messages;
                            $scope.messageDisplayed = messageDisplayed;
                            $scope.messageDisplayedTitle = messageDisplayedTitle;

                        });
