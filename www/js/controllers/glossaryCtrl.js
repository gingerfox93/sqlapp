angular.module('ionicApp').controller('GlossaryCtrl', function ($scope, $stateParams, $ionicSideMenuDelegate) {
    $scope.title = $stateParams.id;
    $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })