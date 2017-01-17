#!/usr/bin/env bash

//  WARNING:  YOU MAY BE REPLACING EDITED FILES

//  CONFIGURE

var appBundle = 'gira'



var ROOT_DIR = __dirname + "/../";
var SCAFFOLDING_DIR = ROOT_DIR + 'app_gen/code_gen/scaffolding/';
var models = require('./bundles/' + appBundle + '/config').models;
var initData = require('./bundles/' + appBundle + '/init');
var generators = require('./code_gen/generators.js');

// deploy app model files to api/models

generators.copyModels(models, ROOT_DIR + 'app_gen/bundles/' + appBundle + '/models/', ROOT_DIR + 'api/models/');

// generate application files

generators.controller(models, SCAFFOLDING_DIR + 'controller-template.js', ROOT_DIR + 'api/controllers/');
generators.appMenu(models, SCAFFOLDING_DIR + 'app.component-template.html', ROOT_DIR + 'assets/templates/app.component.html');
generators.appModule(models, SCAFFOLDING_DIR + 'app-template.ts', ROOT_DIR + 'assets/ts/app.ts');
generators.component(models, SCAFFOLDING_DIR + 'component-template.ts', ROOT_DIR + 'assets/ts/components/');

// we need to read the waterline model files from either bundle or products.  we are using api/models.
generators.detail(models, SCAFFOLDING_DIR + 'detail-menu.html', ROOT_DIR + 'api/models/', ROOT_DIR + 'assets/templates/');
generators.controllerRoutes(models, SCAFFOLDING_DIR + 'routes-template.js', ROOT_DIR + 'config/routes.js');
generators.bootstrap(initData, SCAFFOLDING_DIR + 'bootstrap-template.js',  ROOT_DIR + 'config/bootstrap.js');

