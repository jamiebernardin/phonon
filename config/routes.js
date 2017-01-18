/**
 * Created by jbernardin on 12/26/16.
 */

module.exports.routes = {
    //ROUTES_START
    'get /language' : 'LanguageController.get',
    'put /language/associations/:id' : 'LanguageController.put',
    'get /hello' : 'HelloController.get',
    'put /hello/associations/:id' : 'HelloController.put',
    //ROUTES_END
}