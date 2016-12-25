/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if (req.body.password !== req.body.confirmPassword) {
            return res.json(401, {err: 'Passwords don\'t match.'});
        }
        if (req.body.inviteId !== '8675309') {
            return res.json(401, {err: 'Sorry, you are not on the invite list.'});
        }
        App_user.create(req.body).exec(function (err, user) {
            if (err) {
                return res.json(err.status, {err: err});
            }
            // If user created successfuly we return user and token as response
            if (user) {
                // NOTE: payload is { id: user.id}
                res.json(200, {user: user, token: jwToken.issue({id: user.id})});
            }
        });
    }
};

