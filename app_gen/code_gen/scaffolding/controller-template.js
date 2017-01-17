/**
 * Created by jbernardin on 12/23/16.
 */
/**
 * Created by jbernardin on 5/2/16.
 */


module.exports = {
    items: function(req, res) {
        MODEL_NAME.find().exec(function(err, results){
            var retVal = _.map(results, function(item) {
                return {id: item.id, name: item.name}
            });
            return res.json(retVal);
        });
    },
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
    },
    put : function (req, res) {
        var id = req.params.id;
        var changes  = req.body.changes
        var retVal = { success: false};
        if (typeof id !== 'undefined' && typeof changes !== 'undefined') {
            MODEL_NAME.findOne(id).exec(function(findOneErr, thing) {
                if (findOneErr != null) {
                    retVal.error = findOneErr.toString();
                    return res.json(retVal);
                } else if (typeof thing === 'undefined') {
                    retVal.error = 'No entity found for id = ' + id;
                    return res.json(retVal);
                } else {
                    for (prop in changes) {
                        var toAdd = changes[prop].add;
                        if (toAdd) {
                            thing[prop].add(toAdd);
                        }
                        var toRemove = changes[prop].remove;
                        if (toRemove) {
                            thing[prop].remove(toRemove);
                        }
                    }
                    thing.save(function(saveError) {
                        if (typeof saveError !== 'undefined') {
                            retVal.error = saveError.toString();
                            return res.json(retVal);
                        }
                        MODEL_NAME.findOne(id)POPULATE_COLLECTIONS.exec(function(innerErr, thing) {
                            if (innerErr != null) {
                                retVal.error = innerErr.toString();
                                return res.json(retVal);
                            } else {
                                retVal['success'] = true;
                                retVal['entity'] = thing;
                            }
                            return res.json(retVal);
                        });
                    });
                }
            });
        } else {
            retVal.error =  'No id or changes specified.';
            return res.json(retVal);
        }
    }
};