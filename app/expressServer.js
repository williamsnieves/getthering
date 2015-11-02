var express = require('express');
var path = require('path');

var ExpressServer = function(config){

	config = config || {};

	this.expressServer = express();

	//middlewares

	this.expressServer.use(express.static('public'));
	
	this.expressServer.get("/articles/save", function(req, res, next){
		res.send("articles saved");
	})

	this.expressServer.get("/articles/list", function(req, res, next){
		res.send("articles list");
	})
};

module.exports = ExpressServer;