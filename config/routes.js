/**
 * Created by jbernardin on 12/26/16.
 */

module.exports.routes = {
    //ROUTES_START
    'get /skill_type' : 'Skill_typeController.get',
    'get /ticket_status' : 'Ticket_statusController.get',
    'get /priority_type' : 'Priority_typeController.get',
    'get /ticket' : 'TicketController.get',
    'get /worker' : 'WorkerController.get',
    //'get /foo' : 'FooController.get'
    //ROUTES_END
}