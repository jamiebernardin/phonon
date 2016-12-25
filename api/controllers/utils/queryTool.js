/**
 * Created by jbernardin on 5/3/16.
 */

module.exports = {
    selectFunc: function (table, displayField) {
        return function (req, res) {
            var query = 'select id, ' + displayField + ' from ' + table + ' order by ' + displayField;
            App_user.query(query, function (err, results) {
                if (err) return res.serverError(err);
                return res.ok(results.rows);
            });
        }
    },
    execFunc: function (queryObj) {
        return function (req, res) {
            App_user.query(queryObj, function (err, results) {
                if (err) return res.serverError(err);
                return res.ok(results.rows);
            });
        }
    },

}