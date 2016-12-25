/**
 * Created by jbernardin on 4/26/16.
 */
module.exports = {
    index: function (req, res) {
        var email = req.param('email');
        var password = req.param('password');
        if (!email || !password) {
            res.json(401, {err: 'email and password required'});
        } else {
            App_user.findOne({email: email}, function (err, user) {
                if (!user) {
                    res.json(401, {err: 'invalid email or password'});
                } else {
                    App_user.comparePassword(password, user, function (err, valid) {
                        if (err) {
                            res.json(403, {err: 'forbidden'});
                        } else if  (!valid) {
                            res.json(401, {err: 'invalid email or password'});
                        } else {
                            res.json({
                                user: user,
                                token: jwToken.issue({id: user.id})
                            });
                        }
                    });
                }
            })
        }
    }
};