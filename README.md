

Phonon is a simple Angular2 + Sailsjs CRUD Seed/Framework with code generation and JWT Authentication.  Clone, create the database models and generate code to create a secure web app with CRUD as a starting point.  Code generation is meant as a starting point to understand Phonon Framework and Sail. 

_Contents_
Getting Started
The Phonon angular CRUD framework
Waterline, controllers, and wiring
Assumptions, limitations, and what's missing.


## Getting Started

Basic prerequisites here are that you are somewhat interested/familiar with Angular2 and node. If you are new to Sails or the Waterline ORM (bundled with Sails) you should probably review Waterline to understand how to declare models and their relations. 

First install sails globally if you don't have it already.  Don't worry all other packages will be local to the project.
  

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

Refresh your browser and you'll see a simple entity editor.  There's also an example app that is a bit more advanced with entity associations.  It's called `gira` (wow, that's cute). 
  
```sh
$ cd app_gen
$ node create gira
```

Now go back to http://localhost:1337 and start creating tickets and issues. Notice the ability to assign tickets to users (one-to-many) and the ability to add tickets to a users watching property  (many-to-many).  

## The Phonon angular CRUD framework

Phonon can generate a basic app based on the models (with a little UI config and init data).  Take a look at the file `app_gen/create.js` and read the code comments to understand what is being generated based off of the contents in the bundle (and scaffolding in `app_gen\code_gen\scaffodling`).  

Most of the functionality is actually found in the framework, not the code gen.  The code is located in the `assets\ts\framework` directory.  The main elements are the login and entity services; the search, row, and detail base components; and the property sheet and widgets. The entity service implements basic CRUD operations for all model types.  The login service uses local storage for the web tokens (which I'll cover more in the server-side section).

The property sheet holds the local model and owns all the little property editors that comprise a detail page (look at one of the detail templates found in `assets\templates`).  The concrete component classes (the examples are automatically generated) are all derive from the base components and can be found in one of the files in `assets\ts\components`.  FYI, the search and row component HTML template are inline, while the detail components HTML is in a separate file.  From an Angular2 standpoint, it's nicer to have the HTML template within the TypeScript component file, but when it's too big you have to pull it out.  All of the property components have HTML inline.  

## Waterline, controllers, and wiring



## Assumptions, limitations, and what's missing.

Nobody is going to stick with the exact HTML or styling that's given as default, and it should be pretty straightforward to change that.  
