angular.module('Wizard').controller('StepThreeCtrl', [
    '$scope',
    function(
        $scope
    ) {
        $scope.interests = [
          {
              name:'JavaScript',
              selected: $scope.userData.stepThree.interests.indexOf('JavaScript')>=0
          },
          {
              name:'C',
              selected:$scope.userData.stepThree.interests.indexOf('C')>=0
          },
          {
              name:'Java',
              selected:$scope.userData.stepThree.interests.indexOf('Java')>=0
          },
          {
              name:'Ruby',
              selected:$scope.userData.stepThree.interests.indexOf('Ruby')>=0
          },
          {
              name:'Python',
              selected:$scope.userData.stepThree.interests.indexOf('Python')>=0
          },
          {
              name:'C++',
              selected:$scope.userData.stepThree.interests.indexOf('C++')>=0
          }
        ];
        $scope.checkInterests = function () {
            var interestsCount = 0,
                interestedItems = [];
            $scope.interests.map(function (interest) {
                if (interest.selected === true){
                    interestsCount ++;
                    interestedItems.push(interest.name)
                }
            });
            $scope.userData.stepThree.interests = interestedItems;
            if (interestsCount >=4) {
                $scope.userData.accountType = 'Plus';
                $scope.nextStep = '/step_four'
            } else {
                $scope.nextStep = '/step_two';
            }
        }
    }]);
