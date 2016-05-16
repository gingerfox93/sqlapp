angular.module('ionicApp').service('LoginService', function ($q, $http) {
    return {
        loginUser: function (name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http({
                method: 'PUT',
                url: 'http://192.168.0.12/login',
                data: {
                    'email': name,
                    'password': pw
                },
            }).then(function successCallback(response) {
                if (response.data.status == 'userexists') {
                    if (response.data.enabled == 1) {
                        console.log('logged in as:' + response.data.userId);
                        deferred.resolve('Welcome ' + name + '!');
                    } else {
                        deferred.reject('Sorry your account is disabled.');
                    }
                } else {
                    deferred.reject('Wrong credentials.');
                }
            }, function errorCallback(response) {
                deferred.reject('Wrong credentials.');
            });

            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },

        registerUser: function (email, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http({
                method: 'PUT',
                url: 'http://192.168.0.12/register',
                data: {
                    'email': email,
                    'password': pw
                },
            }).then(function successCallback(response) {
                if (response.data.status == 1) {
                    deferred.resolve('Registration successful');
                }

                if (response.data.status == 0) {
                    deferred.resolve('Email taken');
                }

            }, function errorCallback(response) {
                deferred.reject('Registration failed.');
            });

            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})