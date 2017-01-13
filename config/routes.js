/**
 * Created by jbernardin on 12/26/16.
 */

module.exports.routes = {
    //ROUTES_START
    'get /skill_type' : 'Skill_typeController.get',
    'put /skill_type/associations/:id' : 'Skill_typeController.put',
    'get /ticket_status' : 'Ticket_statusController.get',
    'put /ticket_status/associations/:id' : 'Ticket_statusController.put',
    'get /priority_type' : 'Priority_typeController.get',
    'put /priority_type/associations/:id' : 'Priority_typeController.put',
    'get /ticket' : 'TicketController.get',
    'put /ticket/associations/:id' : 'TicketController.put',
    'get /worker' : 'WorkerController.get',
    'put /worker/associations/:id' : 'WorkerController.put',
    //'get /foo' : 'FooController.get'
    //ROUTES_END
}