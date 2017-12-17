// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID' 		: '765662486940305', // your App ID
        'clientSecret' 	: '7b9fadd8f57f93de1ecb0a9a1487e14b', // your App Secret
        'profileFields' : ['emails', 'first_name', 'last_name'],
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
    },

    'googleAuth' : {
        'clientID'         : '165564089898-sin1nnvhl9rlsgrc34f1djc5mktnrfd8.apps.googleusercontent.com',
        'clientSecret'     : 'GsxpKqfzJLTngWrIaGdKBMX6',
        'callbackURL'      : 'http://hot.asten.it:8080/auth/google/callback'
    }

};
