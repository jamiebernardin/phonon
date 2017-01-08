/**
 * Created by jbernardin on 12/23/16.
 */
/**
 * Created by jbernardin on 5/2/16.
 */


module.exports = {
    items: require('./utils/queryTool').selectQuery('Animal_type'.toLowerCase(), 'name'),
    get: function (req, res) {
        var searchStr  = req.query.searchStr;
        var query = {limit:20};
        if (typeof searchStr === 'undefined' || searchStr === '' || searchStr === 'undefined') {

        } else {
            query.where = {name: {contains: searchStr}};
        }
        Animal_type.find(query).exec(function(err, results){
            return res.json(results);
        });
    }
};