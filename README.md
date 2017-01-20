

Phonon is a simple Angular2 + Sails CRUD framework with code generation and JWT Authentication.  Clone, build a few database models, and generate code to create a secure single-page web app with CRUD as a starting point.  

## Getting Started

Basic prerequisites here are that you are somewhat interested/familiar with Angular2 and node. If you are new to Sails or the Waterline ORM (bundled with Sails) you should probably review Waterline to understand how to declare models and their relations. 

First install sails globally if you don't have it already.  All other dependencies will be installed locally within the project. 
  

```sh
$ npm i sails -g

```

Next, clone this repo and install required npm packages.

```sh
$ git clone git@github.com:jamiebernardin/phonon.git your_project
$ cd your_project
$ npm install
```

Compile Typescript files with either of the commands (-w is the watch option if you use `tsc` directly) 

``` 
$ ./node_modules/typescript/bin/tsc 
# or
$ npm run-script tsc
```

Now start the app.

```
$ sails lift
```

Go to http://localhost:1337 and you should see a login screen.  username is 'foo@foo.com', password is 'foo''.

Now, create a simple 'hello' crud app that's based on the models, configuration, and init data in the `app_gen/bundles/hello` director. 

```sh
$ cd app_gen
$ node create hello
```

Recompile the TypeScript files if you didn't use the '-w' option.  Refresh your browser and you'll see a simple entity editor.  There's also an example app that is a bit more advanced with entity associations.  It's called `gira` (wow, that's cute). 
  
```sh
$ cd app_gen
$ node create gira
```

Recompile the TypeScript files if you didn't use the '-w' option.  Now go back to http://localhost:1337 and start creating tickets and issues. Notice the ability to assign tickets to users (one-to-many) and the ability to add tickets to a users watching property  (many-to-many).  

## The Phonon angular CRUD framework

Phonon is the single-page UI add-on to Sails that sort of completes the Rails analogy for sails.  The entire app is created with only the model definitions (with a little ui config info and init data).  Have a look at the examples in the `app_gen/bundle` directory.  Take a look at the file `app_gen/create.js` and read the code comments to understand what is being generated based off of the contents in the bundle as well as the `app_gen/code_gen` directory.  

Code gen is fine as a starting point, but phonon has a framework that makes the generated code really just a small part of the functionality.  Checkout the `assets/ts/framework` directory.  The main elements are the login and entity services; the search, row, and detail base components found in `assets/ts/framework/base.components.ts`; and the property sheet and property components located in `assets/ts/framework/properties.ts`. 

The entity service implements basic CRUD operations for all model types.  The login service uses local storage for the web tokens (which I'll cover more in the server-side section).

The property sheet manages the data model and owns all the little property editors that comprise a detail page (look at one of the detail templates found in `assets/templates`).  The concrete component classes (the examples are automatically generated) all derive from the base components and can be found in one of the files in `assets/ts/components`.  FYI, the search and row component HTML template are inline, while the detail components HTML is in a separate file since it's much longer.  

## Server-side

Sails handles most of the backend model-based REST stuff on its own, however, some of this functionality is extended to handle the UI treatment of associations.  Have a look at in `assets/api/controller` files.  Most of the services are auto-wired, but phonon needs to register some additional routes in the `config/routes.js` file.  

The web token authentication mechanism is found in `assets/controller/AuthController.js`, `assets/controller/App_userController.js`,  `assets/api/services/jwTokens.js`, and `assets/api/policies/isAuthorized.js`.   

Sails is default configured to use a simple file db.  Check Sails/Waterline documentation for using other DBs.  This project has the Postgres ORM plugin which I primarily use, but I swicthed to the file db default to make it easier to just run it.  FYI, Sails copies an updates all code and config to the`.tmp` directory and serves the content from there. 



## Assumptions, limitations, and what's missing.

This project at this point probably best described as a learning tool; my own personal starting point; and potentially a reference for whomever wants to take some of ideas.  It will likely not be supported.  

It currently has no tests, very limited documentation, inconsistent error handling, and some questionable decisions.   It's configured for dev mode although sails comes with grunt and ready made pipelines to do some of the production packaging.  

Thank you and hope you get something out of it.  

