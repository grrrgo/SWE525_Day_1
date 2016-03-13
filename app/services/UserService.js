angular.module('Wizard').factory('UserService',[
    '$http',
    'ObserverService',
    'ObserverEvents',
    function (
        $http,
        ObserverService,
        ObserverEvents
    ) {
    var factory = {},
        cachedUserData = undefined;
    factory.getUserData = function (cb) {
        if (!cachedUserData) {
            var callBackData = undefined;
            $http.get('../app/mocks/User.json').then(function (response) {
                if (response && response.data) {
                    callBackData = response.data;
                    cachedUserData = callBackData
                }
                cb(callBackData)
            }, function (error) {
                cb(callBackData)
                console.log('get user data failed!',error);
            })
        } else {
            cb(cachedUserData)
        }
    };
    
    factory.updateUserData = function (user) {
        cachedUserData = user;
        ObserverService.notify(ObserverEvents.USER_SUMMARY_UPDATED, user)
    };

    return factory
}]);
