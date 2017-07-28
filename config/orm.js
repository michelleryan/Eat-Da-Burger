// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb){
		console.log(tableInput);
		var queryString = "Select * From " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, vals, cb) {
		var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + vals + "');";
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});

	},
	updateOne: function(table, condition, cb) {
		var queryString = "UPDATE " + table + " SET devoured = 1 WHERE " + condition + ";";
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
		
	}
};

module.exports = orm;
