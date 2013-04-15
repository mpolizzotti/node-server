# The node-server project
Sample implementation of a node server using the express application framework. The focus of this code base is to allow a developer to quickly stand-up a client-side development environment for rapid prototyping.

### Install Node & NPM
The node server leverages [node.js](http://nodejs.org/) and the [express](http://expressjs.com/) framework for its development server. The node server also makes use of [npm](https://npmjs.org/), a package manager for installing node modules. The latest releases of node ships with npm so only a node installation is required. Node offers platform installers for both Windows and Mac OSX. They also offer binaries for Windows, Mac OSX and Linux systems. Visit the [download](http://nodejs.org/download/) page for more information.

To verify your node installation, open a terminal and enter the _node -v_ command:

    node -v // example output: v0.8.9

To verify your npm installation, open a terminal and enter the _npm -v_ command:

    npm -v // example output: 1.1.61

### Install Node Modules
Once node and npm are installed you will need to install all of the node modules leveraged by the node-server project. You can view all of the module dependencies by examining the **package.json** file located at the root of the project.

To install node modules:

Open a terminal window and navigate to the root of the node-server project.

    cd path/to/node-server

Run the _npm install_ command. (You must run the _npm install_ command in the same directory that contains the package.json file).

    npm install

Depending upon your system permissions, you may need to run the _npm install_ as root.

    sudo npm install
    
You may also encounter a warning about installing grunt with the _-g_ parameter. The _-g_ installs grunt globally so it is accessible across all projects.

    npm install -g grunt-cli

Once complete, the **node_modules** directory, containing all of your project's node modules, will be addded to your project.

### Start the Server
Open a terminal window and navigate to the root of the node-server project.

    cd path/to/node-server

Run the _node app.js_ command to start the server.

    node app.js

Open a browser and navigate to http://localhost:3000

## Build
The node-server project leverages [r.js](http://requirejs.org/docs/optimization.html), the requirejs build tool and [gruntjs](http://gruntjs.com/), a task-based command line build tool for JavaScript projects to manage the application's build process.

To run a build:

Open a terminal window and navigate to the root of the node-server project.
    
    cd path/to/node-server
    
Run the _grunt prod_ command to run the build.

    grunt prod
    
When successful, the optimized and production-ready node-server application will be added to the root of the node-server project under the **target** directory. This directory is never checked into the repo and gets destroyed with each new build.

## UI Architecture
The node-server project can be used as a development starting point. Applications, in general, tend to load many JavaScript libraries and framework files using script tags. Script tags are blocking by nature. Everything that’s happening or loading on the page is halted while the script is downloaded and executed. Some modern browsers may let you download these in parallel, but the rest of the page is still blocked from doing anything meaningful. To that end, the node-server project has employed [requirejs](http://requirejs.org/), a JavaScript file and module loader, to build out a light-weight front-end. The front-end of the node-server project implements requirejs by including the library in a single script tag in the top level HTML page.

    <script type="text/javascript" src="path/to/require-jquery.js" data-main="path/to/main"></script>

The **data-main** attribute points toward **main.js**, which houses our requirejs configuration and application bootstrap process. Visit the requirejs site for more detailed information on [configuration options](http://requirejs.org/docs/api.html#config).

### AMD
Project files are written according to the **[Asynchronous Module Definition](https://github.com/amdjs/amdjs-api/wiki/AMD)** or **AMD** and follow the below structure. The requirejs site provides an excellent [explanation on AMD and its benefits](http://requirejs.org/docs/whyamd.html).

    define('name', ['dependency'] , function (dependency) {
        return function () {};
    });

### Third-Party Libaries
For the front-end, the node-server project also ships with several popular libraries including, [jquery](http://jquery.com/), [underscore](http://underscorejs.org/) and [less](http://lesscss.org/). The front-end of the node-server project actually leverages a special version of [jquery](http://requirejs.org/docs/jquery.html) provided by requirejs. It is important to note that many of these third-party libraries make themselves availble through the global namespace. Any library that does not follow an AMD pattern needs to be _shimmed_ in order to work properly with requirejs library. The requirejs library provides a [shim](http://requirejs.org/docs/api.html#config-shim) configuration to manage dependenices that make use of _browser globals_. To examine the shimmed libraries and thier configuration in the node-server project take a look at the [main.js](https://github.com/mpolizzotti/node-server/blob/master/public/js/src/main.js) file, which is where requirejs is configured and bootstrap process begins.
