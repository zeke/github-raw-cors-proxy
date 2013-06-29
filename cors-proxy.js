#!/usr/bin/env node

var request = require('request');
var cors = require('cors');
var express = require('express');

var app = express();

app.get('/*', cors(), function(req, res){
  var url = "https://raw.github.com/" + req.params[0].replace("blob/", "")

// https://github.com/bestiejs/lodash/blob/master/package.json
// https://raw.github.com/bestiejs/lodash/master/package.json
// https://raw.github.com/bestiejs/lodash/blob/master/package.json

  console.log(url)
  request.get({url:url, json:true}, function(err, resp, body) {
    res.jsonp(body);
  });
});

app.listen(process.env.PORT || 5000);