/**
 * Created by jbernardin on 1/15/17.
 */
/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */


module.exports.bootstrap = function (cb) {


    //  This is to redirect 80 to https 443
    //var express = require("express"),
    //    app = express();
    //app.get('*', function(req,res) {
    //  res.redirect('https://' + req.headers.host + req.url)
    //}).listen(80);

    var obj = {email: 'foo@foo.com', password: 'foo', confirmPassword: 'foo'}
    App_user.create(obj).exec(function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log('user: ' + user.email + ' created.')
        }
    });


    //INIT_DATA_START

    //INIT_DATA_END




    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};

