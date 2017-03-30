var db = require('./dbconnection')
var cash = {
    getAllCash: function(callback) {
        db.query('select * from s_cash', callback);
    },
    getCashById: function(id, callback) {
        db.query('select * from s_cash where id = ?', [id], callback);
    },
    addCash: function(Cash, callback) {
        db.query('insert into s_cash set ?', Cash, callback);
    },
    updateCash: function(Cash, callback) {
        db.query('update s_cash set ?', Cash, callback);
    },
    deleteCash: function(id, callback) {
        db.query('delete from s_cash where id = ?', [id], callback);
    }
}
module.exports = cash;