/**
 * Created by jbernardin on 1/7/17.
 */

module.exports = {

    attributes: {
        name: {
            type: 'string'
        },
        skill: {
            model: 'skill_type'
        },
        assigned: {
            collection: 'ticket',
            via: 'assignee'
        },
        watching: {
            collection: 'ticket',
            via: 'watchers'
        }
    }
}