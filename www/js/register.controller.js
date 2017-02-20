angular.module('starter')
    .controller('registerController',['$scope','UserService','RegisterService','$location','$ionicLoading',function($scope,UserService,RegisterService,$location,$ionicLoading){
        $scope.user = UserService.getUser();
        $scope.diagnostic = '';
        $scope.register = function(user){
             $ionicLoading.show({
              template: 'Loading...'
            });
            RegisterService.register(user)
                .then(function(response){
                $ionicLoading.hide();
                console.log(JSON.stringify(response));
                $scope.diagnostic = JSON.stringify(response.data) + " "+response.statusText+" "+response.status;
                if(response.status == 200){
                    UserService.setUser(user);
                    UserService.setLoggedIn('api');
                    $location.path('/home');
                }else{
                    // stay on registration page
                }
            },function(error){
                 $ionicLoading.hide();
            });
        }
        
        $scope.facebookLogin = function(){
            $ionicLoading.show({
              template: 'Loading...'
            });
            CordovaFacebook.login({
               permissions: ['email'],
               onSuccess: function(result) {
                   $scope.diagnostic = result;
                   $ionicLoading.hide();
                   if(result.success){
                       UserService.setLoggedIn('facebook');
                       $location.path('/home');
                   }
                  if(result.declined.length > 0) {
                     alert("The User declined something!");
                  }
                  /* ... */
               },
               onFailure: function(result) {
                   $ionicLoading.hide();
                  if(result.cancelled) {
                     alert("The user doesn't like my app");
                  } else if(result.error) {
                     alert("There was an error:" + result.errorLocalized);
                  }
               }
            });
        }
        
        $scope.googleLogin = function(){
            $ionicLoading.show({
              template: 'Loading...'
            });
            window.plugins.googleplus.login(
          {
            scopes: 'profile email', 
            webClientId: '465610383384-ffisafkse4j6igemhf3s56kkvpik95vm.apps.googleusercontent.com', 
            offline: true
          },
          function (response) {
             // if success 
              $ionicLoading.hide();
              $scope.diagnostic =  response;
              UserService.setUser({'email' : response.email,
                                  'username' : response.displayName});
              UserService.setLoggedIn('Google+');
              $location.path('/home');

          },
          function (error) {
              // if failed
            $ionicLoading.hide();
            $scope.diagnostic =  error;

          }
        );
    }
        
        $scope.linkedinLogin = function(){
            
        }
    }]); 