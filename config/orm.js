// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = "Select * From " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, vals, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += "(burger_name) VALUES (?);";
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});

	},
	updateOne: function(table, valToUpdate, cb) {
		// var queryString = "UPDATE " + table;
		// queryString += "SET "
	}
};

module.exports = orm;
