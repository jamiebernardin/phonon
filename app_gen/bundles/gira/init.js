/**
 * Created by jbernardin on 1/15/17.
 */

module.exports = {
    Ticket_status: [
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
    ],
    Priority_type: [
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
    ],
    Skill_type: [
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
            description: 'All around resource for sql, hdfs, and integration.'
        }
    ],
    Worker: [
        {
            name: 'John Smith',
            skill: 3
        },
        {
            name: 'Barry Bonds',
            skill: 1
        },
        {
            name: 'Liz Harris',
            skill: 2
        }
    ],
    Ticket: [
        {
            name: 'holodeck fire',
            description: 'houston we have a problem',
            assignee: 1,
            priority: 1,
            status: 1
        },
        {
            name: 'clingons approaching',
            description: "bad news for sure",
            assignee: 2,
            priority: 2,
            status: 2
        }
        ,
        {
            name: 'cargo bay was left open',
            description: "oh boy, not again",
            assignee: 3,
            priority: 3,
            status: 3
        }
    ]
}


