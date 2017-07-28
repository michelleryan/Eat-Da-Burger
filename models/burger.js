var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(vals, cb){
		orm.insertOne("burgers", vals, function(cb){
			cb(res);
		});
	}
};

module.exports = burger;