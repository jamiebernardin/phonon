#!/usr/bin/env bash

var models = require('../assets/models').models;
var generators = require('./generators.js');

generators.appModule(models);
models.forEach(function (model) {
    console.log(model);
});

