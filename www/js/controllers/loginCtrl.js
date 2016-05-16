angular.module('ionicApp').controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('eventmenu.home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    };
    
     $scope.register = function() {
        LoginService.registerUser($scope.data.email, $scope.data.password).success(function(data) {
            $state.go('login');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Registration failed!',
                template: 'Please check your details!'
            });
        });
    };
    
})