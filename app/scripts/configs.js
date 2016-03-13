angular.module('Wizard')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function (
            $stateProvider,
            $urlRouterProvider
        ) {
            $urlRouterProvider.otherwise("/step_one");
            $stateProvider.
                state('step_one', {
                    url:'/step_one',
                    templateUrl: '../app/views/StepOne.html',
                    controller: 'StepOneCtrl'
                }).
                state('step_two', {
                    url:'/step_two',
                    templateUrl: '../app/views/StepTwo.html',
                    controller: 'StepTwoCtrl'
                }).
                state('step_three', {
                    url:'/step_three',
                    templateUrl: '../app/views/StepThree.html',
                    controller: 'StepThreeCtrl'
                }).
                state('step_four', {
                    url:'/step_four',
                    templateUrl: '../app/views/StepFour.html',
                    controller: 'StepFourCtrl'
                })
        }
    ])
    .run(['$rootScope','UserService','$state',function($rootScope,UserService,$state) {
        $rootScope.$on('$stateChangeStart',
            function(event, toState){
                var accountType;
                UserService.getUserData(function (data) {
                    accountType = data.accountType
                });
                switch (toState.url){
                    case '/step_two':
                        if (accountType !== 'Light' && accountType !== 'Standard') {
                            $state.go('step_one')
                        }
                        break;
                    case '/step_three':
                        if (accountType !== 'Standard') {
                            $state.go('step_one')
                        }
                        break;
                    case '/step_four':
                        if (accountType !== 'Plus') {
                            $state.go('step_one')
                        }
                        break;
                    default:
                        $state.go('step_one')
                }
            })
    }]);
