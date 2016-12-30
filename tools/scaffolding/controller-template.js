/**
 * Created by jbernardin on 12/23/16.
 */
/**
 * Created by jbernardin on 5/2/16.
 */


module.exports = {
    items: require('./utils/queryTool').selectQuery('MODEL_NAME'.toLowerCase(), 'DISPLAY_FIELD'),
    get: function (req, res) {
        var searchStr  = req.query.searchStr;
        var query = {limit:20};
        if (typeof searchStr === 'undefined' || searchStr === '' || searchStr === 'undefined') {

        } else {
            query.where = {SEARCH_FIELD: {contains: searchStr}};
        }
        MODEL_NAME.find(query)POPULATE_COLLECTIONS.exec(function(err, results){
            return res.json(results);
        });
    }
};