describe('StepThreeController test', function () {
    var scope,ctrl;
    beforeEach(function () {
        module('Wizard');
        inject(function (_$rootScope_,_$controller_) {
            scope = _$rootScope_.$new();
            scope.userData =
                {
                    stepThree: {
                        interests : ['JavaScript',
                                        'C',
                                        'Java',
                                        'Ruby',
                                        'Python'
                        ]
                    }
                };
            ctrl = _$controller_('StepThreeCtrl', {
                $scope: scope
            })
        })
    });
    it('should get the current interested items', function () {
        expect(scope.interests).toEqual([
            {
                name:'JavaScript',
                selected: true
            },
            {
                name:'C',
                selected:true
            },
            {
                name:'Java',
                selected:true
            },
            {
                name:'Ruby',
                selected:true
            },
            {
                name:'Python',
                selected:true
            },
            {
                name:'C++',
                selected:false
            }
        ]);
    });

    it('should check if user has greater than 4 interest', function () {
        scope.checkInterests();
        expect(scope.userData.accountType).toEqual('Plus');
        expect(scope.nextStep).toEqual('/step_four');
        scope.interests = [
            {
                name:'JavaScript',
                selected: false
            },
            {
                name:'C',
                selected: false
            },
            {
                name:'Java',
                selected: false
            },
            {
                name:'Ruby',
                selected: false
            },
            {
                name:'Python',
                selected: false
            },
            {
                name:'C++',
                selected:false
            }
        ];
        scope.checkInterests();
        expect(scope.nextStep).toEqual('/step_two');
    });
});