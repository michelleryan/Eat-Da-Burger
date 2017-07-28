var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//console.log("I am in the burgers_controller.js file");


router.get("/", function(req, res){
	console.log("I am in the router.get function of the burgers_controller.js file");
	burger.selectAll(function(data){
	var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	console.log("I am in the router.post function of the burgers_controller.js file");
	console.log(req.body.burger_name);
	burger.insertOne(req.body.burger_name, function(){
		res.redirect("/");
	});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;
	console.log("condition is : " + condition);
	burger.updateOne(condition, function(){
		res.redirect("/");
	});
});

module.exports = router;


