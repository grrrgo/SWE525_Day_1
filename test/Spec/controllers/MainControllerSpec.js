describe('MainController test suit', function () {
    var scope, ctrl, UserService, $location, observer, ObserverEvents;
    beforeEach(function () {
        module('Wizard');

        inject(function ($rootScope, $controller, _UserService_, _$location_,_ObserverService_,_ObserverEvents_) {
            scope = $rootScope.$new();
            UserService = _UserService_;
            $location = _$location_;
            observer = _ObserverService_;
            ObserverEvents = _ObserverEvents_;
            spyOn(UserService, 'getUserData').and.callFake(function (cb) {
                cb({
                    testData: 'testData'
                })
            });
            ctrl = $controller('MainCtrl', {
                $scope: scope
            });
        });
    });

    it('calls for UserService and get the data', function () {
        expect(scope.userData).toEqual({
            testData: 'testData'
        });

    });

    it('updates user data/navigates to specified path/does a obeserver notification', function () {
        spyOn(observer, 'notify').and.callFake(function () {
            return false
        });
        spyOn($location, 'path').and.callFake(function () {
            return false
        });
        spyOn(UserService, 'updateUserData').and.callFake(function () {
            return false
        });
        scope.next('test');
        expect(observer.notify).toHaveBeenCalledWith(ObserverEvents.USER_SUMMARY_UPDATED, {
            testData: 'testData'
        });
        expect($location.path).toHaveBeenCalledWith('test');
        expect(UserService.updateUserData).toHaveBeenCalledWith({
            testData: 'testData'
        });


    });

});