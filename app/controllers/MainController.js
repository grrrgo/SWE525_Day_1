angular.module('Wizard').controller('MainCtrl', [
    '$scope',
    '$location',
    'UserService',
    'ObserverService',
    'ObserverEvents',
    function(
        $scope,
        $location,
        UserService,
        ObserverService,
        ObserverEvents
    ) {
        UserService.getUserData(function (data) {
            $scope.userData = data
        });
        $scope.next = function (path) {
            UserService.updateUserData($scope.userData);
            $location.path(path);
            ObserverService.notify(ObserverEvents.USER_SUMMARY_UPDATED, $scope.userData);
        }
}]);
