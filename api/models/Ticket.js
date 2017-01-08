/**
 * Created by jbernardin on 1/7/17.
 */

module.exports = {

    attributes: {
        name: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        status: {
            model: 'ticket_status'
        },
        priority: {
            model: 'priority_type'
        },
        watchers: {
            collection: 'worker',
            via: 'watching'
        },
        assignee: {
            model: 'worker'
        }
    }
};