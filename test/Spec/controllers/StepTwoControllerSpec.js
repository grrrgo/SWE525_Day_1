describe('StepTwoController test', function () {
    var scope,ctrl;
    beforeEach(function () {
        module('Wizard');
        inject(function (_$rootScope_,_$controller_) {
            scope = _$rootScope_.$new();
            ctrl = _$controller_('StepTwoCtrl', {
                $scope: scope
            })
        })
    });
    it('should handle opt in and out actions', function () {
        scope.userData = {
            accountType:'',
            stepTwo:{
                optIn:''
            }
        };
        scope.optInOrOut('in');
        expect(scope.userData.accountType).toEqual('Standard');
        expect(scope.userData.stepTwo.optIn).toEqual(true);

        scope.optInOrOut('out');
        expect(scope.userData.accountType).toEqual('Light');
        expect(scope.userData.stepTwo.optIn).toEqual(false);

    });
});