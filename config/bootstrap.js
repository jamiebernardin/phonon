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
    var ticket_stati = [
        {
            name: 'open',
            description: 'Ticket not yet assigned'
        },
        {
            name: 'assigned',
            description: 'Ticket has been assigned, but is not being worked on.'
        },
        {
            name: 'in progress',
            description: 'Ticket is assigned and is being worked on.'
        },
        {
            name: 'closed',
            description: 'All work is completed and it\'s super!'
        }
    ];
    ticket_stati.forEach(function (ts) {
            Ticket_status.create(ts).exec(function (err, thing) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('person: ' + thing.name + ' created.')
                }
            });
        }
    );
    var priority = [
        {
            name: 'low',
            description: 'Not a big priority.'
        },
        {
            name: 'medium',
            description: 'This needs to get done.'
        },
        {
            name: 'high',
            description: 'Sky is falling.'
        }
    ];
    priority.forEach(function (ts) {
            Priority_type.create(ts).exec(function (err, thing) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('person: ' + thing.name + ' created.')
                }
            });
        }
    );

    var skills = [
        {
            name: 'Frontend',
            description: 'JavaScript front end developer'
        },
        {
            name: 'Backend python',
            description: 'Python developer for backend.'
        },
        {
            name: 'Backend scala',
            description: 'Scala developer for data processing.'
        },
        {
            name: 'Data engineer',
            description: 'All around resource for sql, hdfs, and integraion.'
        }
    ];
    skills.forEach(function (ts) {
            Skill_type.create(ts).exec(function (err, thing) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('person: ' + thing.name + ' created.')
                }
            });
        }
    );
    var workers = [
        {
            name: 'John',
            skill: 3
        },
        {
            name: 'Sally',
            skill: 1
        },
        {
            name: 'Beth',
            skill: 2
        }
    ];
    workers.forEach(function (ts) {
            Worker.create(ts).exec(function (err, thing) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('person: ' + thing.name + ' created.')
                }
            });
        }
    );
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};
