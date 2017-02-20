angular.module('starter')
    .service('UserService',function(){
    var self = this;
    self.user = {
        username : '',
        email : '',
        password : ''
    }
    
    self.loggedInBy = '';
    
    return {
        
        getUser: function(){
            return self.user;
        },
        
        setUser : function(user){
            self.user = user;
        },
        
        setLoggedIn : function(loggedIn){
            self.loggedInBy = loggedIn;
        },
        
        getLoggedIn : function(){
            return self.loggedInBy;
        }
        
    }
});