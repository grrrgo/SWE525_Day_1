angular.module('Wizard').controller('StepTwoCtrl', [
    '$scope',
    function(
        $scope
    ) {
        $scope.optInOrOut = function (param) {
            if (param === 'in') {
                $scope.userData.accountType = 'Standard';
                $scope.userData.stepTwo.optIn = true;
            }

            if (param === 'out') {
                $scope.userData.accountType = 'Light';
                $scope.userData.stepTwo.optIn = false;
            }
        }
    }]);
