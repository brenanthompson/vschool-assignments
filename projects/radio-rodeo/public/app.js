var app = angular.module("radio-rodeo", []);

app.controller("podcasts", function($scope))

var Audiosearch = require('audiosearch-client-node');

var audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET);