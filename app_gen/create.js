#!/usr/bin/env bash

//  WARNING!!!  YOU MAY BE REPLACING EDITED FILES.  

var args = process.argv.slice(2);
if (args.length < 1) {
    console.log('please specify the bundle name... e.g. \' node create gira \'');
    process.exit(0);
}

var appBundle = args[0];



var ROOT_DIR = __dirname + "/../";
var SCAFFOLDING_DIR = ROOT_DIR + 'app_gen/code_gen/scaffolding/';
var models = require('./bundles/' + appBundle + '/config').models;
var initData = require('./bundles/' + appBundle + '/init');
var generators = require('./code_gen/generators.js');

// copy app model files to api/models
generators.copyModels(models, ROOT_DIR + 'app_gen/bundles/' + appBundle + '/models/', ROOT_DIR + 'api/models/');

// generate application files

// create the server-side controllers that give you a few additional operations to the sails blueprints
generators.controller(models, SCAFFOLDING_DIR + 'controller-template.js', ROOT_DIR + 'api/controllers/');

// this just generates the routing links for the main menu
generators.appMenu(models, SCAFFOLDING_DIR + 'app.component-template.html', ROOT_DIR + 'assets/templates/app.component.html');

// this adds the import statements and dependencies to the main application module
generators.appModule(models, SCAFFOLDING_DIR + 'app-template.ts', ROOT_DIR + 'assets/ts/app.ts');

// This generates the concrete component classes
generators.component(models, SCAFFOLDING_DIR + 'component-template.ts', ROOT_DIR + 'assets/ts/components/');

// Generate the component template for the concrete detail component
// we need to read the waterline model files from either bundle or products.  we are using api/models.
generators.detail(models, SCAFFOLDING_DIR + 'detail-menu.html', ROOT_DIR + 'api/models/', ROOT_DIR + 'assets/templates/');

//  These next two are sails configuration files.
generators.controllerRoutes(models, SCAFFOLDING_DIR + 'routes-template.js', ROOT_DIR + 'config/routes.js');
generators.bootstrap(initData, SCAFFOLDING_DIR + 'bootstrap-template.js',  ROOT_DIR + 'config/bootstrap.js');

