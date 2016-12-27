#!/usr/bin/env bash

var models = require('./models').models;
var generators = require('./generators.js');


generators.controller(models);
generators.appMenu(models);
generators.appModule(models);
generators.controller(models);
generators.component(models);
generators.detail(models);
generators.controllerRoutes(models);

