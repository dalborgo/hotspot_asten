// load the things we need
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        room         : String,
        name         : String,
        surname      : String,
        hotel        : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        hotel        : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        picture      : String,
        link         : String,
        locale       : String,
        hotel        : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
