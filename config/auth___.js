// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID' 		: '195208281038608', // your App ID
        'clientSecret' 	: '32180b7c782020623193603c81526145', // your App Secret
        'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback',
        'profileFields' : ['emails', 'first_name', 'last_name'],
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '165564089898-sin1nnvhl9rlsgrc34f1djc5mktnrfd8.apps.googleusercontent.com',
        'clientSecret'     : 'GsxpKqfzJLTngWrIaGdKBMX6',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
