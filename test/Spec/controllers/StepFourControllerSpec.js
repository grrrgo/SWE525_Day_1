describe('StepFourController test', function () {
    var scope,ctrl;
    beforeEach(function () {
        module('Wizard');
        inject(function (_$rootScope_,_$controller_) {
            scope = _$rootScope_.$new();
            ctrl = _$controller_('StepFourCtrl', {
                $scope: scope
            })
        })
    });
    it('should handle opt in and out actions', function () {
        scope.userData = {
            accountType:'',
            stepFour: {
                optIn:''
            }
        };
        scope.optIn();
        expect(scope.userData.accountType).toEqual('Premium');
        expect(scope.userData.stepFour.optIn).toEqual(true);

    });
});