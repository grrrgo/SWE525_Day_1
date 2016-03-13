angular.module('Wizard').controller('StepFourCtrl', [
    '$scope',
    function(
        $scope
    ) {
        $scope.optIn = function () {
            $scope.userData.accountType = 'Premium';
            $scope.userData.stepFour.optIn = true
        }
    }]);
