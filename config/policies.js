/**
 * Created by jbernardin on 4/26/16.
 */
module.exports.policies = {

    '*': ['isAuthorized'], // Everything resctricted here
    'App_userController': {
        'create': true // We dont need authorization here, allowing public access
    },

    'AuthController': {
        '*': true // We dont need authorization here, allowing public access
    }
};