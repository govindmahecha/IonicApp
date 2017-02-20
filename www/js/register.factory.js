angular.module('starter')
    .factory('RegisterService',['$http',function($http){
        
        var RegisterService = {
            register : function(user){
                var promise = $http.get("http://buyminus.com/ca3/rest/register-customer?username="+user.username+"&password="+user.password+"&email="+user.email).then(function(response){
                    
                            return response;
                    },function(error){
                    
                    return error;
                });
                
                //return promise to controller;
                return promise;
                }
        };
        
        return RegisterService;
    }]);