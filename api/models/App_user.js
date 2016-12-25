/**
 * Created by jbernardin on 4/26/16.
 */
var bcrypt = require('bcrypt');

module.exports = {

    schema: true,

    attributes: {
        email: {
            type: 'email',
            required: 'true',
            unique: true // Yes unique one
        },

        encryptedpassword: {
            type: 'string'
        },
        // We don't wan't to send back encrypted password either
        toJSON: function () {
            var obj = this.toObject();
            delete obj.encryptedpassword;
            return obj;
        }
    },
    // Here we encrypt password before creating a User
    beforeCreate : function (values, next) {
        bcrypt.genSalt(10, function (err, salt) {
            if(err) return next(err);
            bcrypt.hash(values.password, salt, function (err, hash) {
                if(err) return next(err);
                values.encryptedpassword = hash;
                next();
            })
        })
    },

    comparePassword : function (password, user, cb) {
        bcrypt.compare(password, user.encryptedpassword, function (err, match) {
            if(err) {
                cb(err);
            }
            else if(match) {
                cb(null, true);
            } else {
                cb(err);
            }
        })
    }
};