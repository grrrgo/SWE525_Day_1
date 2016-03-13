angular.module('Wizard').directive('userSummary', [
    'ObserverService',
    'UserService',
    'ObserverEvents',
    function (
        ObserverService,
        UserService,
        ObserverEvents
    ) {
        return {
            restrict: 'AE',
            templateUrl: '../app/views/UserSummary.html',
            link: function ($scope, $element, $attr) {
                function getDataForDirective() {
                    UserService.getUserData(function (data) {
                        $scope.userData = data
                    });
                }
                getDataForDirective();
                ObserverService.attach(getDataForDirective, ObserverEvents.USER_SUMMARY_UPDATED, 'userSummaryDirective')
            }
        }

}]);
