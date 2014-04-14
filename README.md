contact-list-application
========================

Contact List Application

## Stack

* [AngularJS](http://www.angularjs.org/) - Open-source JavaScript framework maintained by Google
* CSS based on [Bootstrap](http://getbootstrap.com/)
* Unit tests by [Jasmine Framework](http://jasmine.github.io/) - Open-source testing framework for JavaScript
* [Karma] (http://karma-runner.github.io/0.12/index.html) -  Spawns a web server that executes source code against test code
* [NodeJS] (http://nodejs.org/) - Plataform for easily building fast

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/)
* Install Grunt-CLI as global npm modules:

    ```
    npm install -g grunt-cli
    ```

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/diegofss11/contact-list-application.git
cd contact-list-application
```

### App Server

The application server is a NodeJS application that relies upon some 3rd Party npm packages.  You need to install these:

* Install local dependencies (from the project root folder):

    ```
    cd contact-list-application
    npm install
    ```

  (This will install the dependencies declared in the package.json file)
  
* To run the project
   ```
    cd contact-list-application
    grunt
    ```

The application is hosted in (http://localhost:9000/)

### Karma and Jasmine Configutation

All the tests files are included in /test/spec/services/*
The Karma config file is located  in /test/spec

* Install Karma (from project root folder):

    ```
    npm install -g karma
    ```

  (This will install the dependencies declared in the client/package.json file)
  
* To run jasmine tests with Karma (root folder):
    ```
    ./node_modules/karma/bin/karma start
    ```

