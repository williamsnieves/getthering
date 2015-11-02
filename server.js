/*'use strict'

import http from 'http';
import express from 'express';

let expressServer = express();


expressServer.get('/article/save/', function(req, res, next){
	res.send("holaa articles")
})

expressServer.get('/article/list/', function(req, res, next){
	res.send("holaa articles list")
})


let server = http.createServer(expressServer);

server.listen(3000);*/

var http = require('http'),
	conf = require('./conf'),
	expressServer = require('./app/expressServer');

var app = new expressServer();

var server = http.createServer(app.expressServer);

server.listen(conf.port);