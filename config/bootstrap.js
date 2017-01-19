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
[
	{
		"name": "holodeck fire",
		"description": "houston we have a problem",
		"assignee": 1,
		"priority": 1,
		"status": 1
	},
	{
		"name": "clingons approaching",
		"description": "bad news for sure",
		"assignee": 2,
		"priority": 2,
		"status": 2
	},
	{
		"name": "cargo bay was left open",
		"description": "oh boy, not again",
		"assignee": 3,
		"priority": 3,
		"status": 3
	}
]
    .forEach(function (ts) {
        Ticket.create(ts).exec(function (err, thing) {
            if (err) { console.log(err); } else {
                console.log('Ticket: ' + thing.name + ' created.')
            }
        });
    });


[
	{
		"name": "John Smith",
		"skill": 3
	},
	{
		"name": "Barry Bonds",
		"skill": 1
	},
	{
		"name": "Liz Harris",
		"skill": 2
	}
]
    .forEach(function (ts) {
        Worker.create(ts).exec(function (err, thing) {
            if (err) { console.log(err); } else {
                console.log('Worker: ' + thing.name + ' created.')
            }
        });
    });


[
	{
		"name": "Frontend",
		"description": "JavaScript front end developer"
	},
	{
		"name": "Backend python",
		"description": "Python developer for backend."
	},
	{
		"name": "Backend scala",
		"description": "Scala developer for data processing."
	},
	{
		"name": "Data engineer",
		"description": "All around resource for sql, hdfs, and integration."
	}
]
    .forEach(function (ts) {
        Skill_type.create(ts).exec(function (err, thing) {
            if (err) { console.log(err); } else {
                console.log('Skill_type: ' + thing.name + ' created.')
            }
        });
    });


[
	{
		"name": "low",
		"description": "Not a big priority."
	},
	{
		"name": "medium",
		"description": "This needs to get done."
	},
	{
		"name": "high",
		"description": "Sky is falling."
	}
]
    .forEach(function (ts) {
        Priority_type.create(ts).exec(function (err, thing) {
            if (err) { console.log(err); } else {
                console.log('Priority_type: ' + thing.name + ' created.')
            }
        });
    });


[
	{
		"name": "open",
		"description": "Ticket not yet assigned"
	},
	{
		"name": "assigned",
		"description": "Ticket has been assigned, but is not being worked on."
	},
	{
		"name": "in progress",
		"description": "Ticket is assigned and is being worked on."
	},
	{
		"name": "closed",
		"description": "All work is completed and it's super!"
	}
]
    .forEach(function (ts) {
        Ticket_status.create(ts).exec(function (err, thing) {
            if (err) { console.log(err); } else {
                console.log('Ticket_status: ' + thing.name + ' created.')
            }
        });
    });


    //INIT_DATA_END




    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};

