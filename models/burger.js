var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res){
			console.log("from burger.js: " + res);
			cb(res);
		});
	},
	insertOne: function(vals, cb){
		console.log("in the burger.js the vals passed to here are: " + vals);
		orm.insertOne("burgers", vals, function(res){
			cb(res);
		});
	}
};

module.exports = burger;