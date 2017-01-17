# Phonon

Phonon is a simple Angular2 + Sailsjs CRUD Seed/Framework with code generation and JWT Authentication.  Clone, create the database models and generate code to create a secure web app with CRUD as a starting point.  Code generation is meant to just get started, but Phonon also has a CRUD framework, so that the code generation does not just give you whole mess of code.

## Getting Started

Phonon assume that you are interested in TypeScript Angular2 and JavaScript as the backend.  It would help to have a look at the Waterline ORM (bundled with Sails) to understand how to declare models and their relations. Anyway, just do the following to get an empty app with a login component and authentication.   

```sh
$ git clone git@github.com:jamiebernardin/phonon.git your_project

$ cd your_project
$ npm install

// compile and watch the typescript files in a seperate window :
$ ./node_modules/typescript/bin/tsc -w

$ sails lift
```

Go to http://localhost:1337 and you should see a login screen.  username is 'foo@foo.com', password is 'foo''.

Now, create a simple 'hello' crud app that's based on the models 

```sh
$ cd app_gen
$ node create hello
```

Refresh your browser and you'll see a simple entity editor.  

Or forget the silly hello example and generate a ticketing application called 'gira' (wow, clever). 
  
```sh
$ cd app_gen
$ node create gira
```

Now go back to http://localhost:1337 and start creating tickets and issues. 
