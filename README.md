Contact List Application V2.0
========================

## Technology Stack

* [AngularJS](http://www.angularjs.org/) - Open-source JavaScript framework maintained by Google
* CSS based on [Bootstrap](http://getbootstrap.com/)
* Unit tests by [Jasmine Framework](http://jasmine.github.io/) - Open-source testing framework for JavaScript
* [Karma] (http://karma-runner.github.io/0.12/index.html) -  Spawns a web server that executes source code against test code
* [Protractor] (https://github.com/angular/protractor) - Protractor is an end to end test framework built for AngularJS
* [Express] (http://expressjs.com/) - Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications
* [NodeJS] (http://nodejs.org/) - Plataform for easily building fast, scalable network applications - API REST using this tool
* [MongoDB] (http://www.mongodb.org/) - An open-source document database, and the leading NoSQL database
* [MongoHQ] (http://www.mongohq.com/) - Fully-managed platform used by developers to deploy, host and scale MongoDB databases. The database of Contacts is hosted on this plataform


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
  
* To run the CLIENTE project:
   
    ```
    cd contact-list-application
    grunt
    ```

The application is hosted in (http://localhost:9000/)

* To run the node API server

    ```
    cd contact-list-application
    node server.js
    ```

In root, the server API configuration is located in server.js

### Karma and Jasmine Configutation

All the tests files are included in /test/spec/services/*
The Karma config file is located  in /test/spec

* Install Karma (from project root folder):

    ```
    npm install -g karma
    ```

  (This will install the dependencies declared in the client/package.json file)
  
* To run jasmine tests with Karma using NodeJS(root folder):
    
    ```
    grunt karma
    ```

### Protractor
* To run protractor using Grunt(root folder):
    
    ```
    grunt protractor
    ```
