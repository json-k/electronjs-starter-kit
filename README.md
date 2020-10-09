# ElectronJS Starter Kit

This is a template project for the creation of an [ElectronJS](https://www.electronjs.org/) application (in TypeScript) using an Angular project as the [ElectronJS Renderer](https://www.electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes).

The template is designed to allow for minimal configuration to create a unique application.

The project is structured with a source folder contained the ElectronJS **main** and **renderer** process code. They will both build to a top level folder called 'build' where the final application is assembled before creating the deployment.

## Using the Template

After cloning the project a few values in the **package.json** should be changed to make the project your own:

```JavaScript
  {
     "productName":"ElectronJS Starter Kit",
     "config": {
       "exeName": "ElectronJSStarterKit"
     },
     "version": "0.0.1",
     ...
  }
```

Where **productName** is the friendly name of your application (returned by `app.getName()`) and **exeName** is the final name of the application package, and version will be returned by `app.getVersion()`.

**Note:** the actually package name is a random string in the final distribution.

Then you can install the node modules with:

```bash
npm run install:all
```

And run the project in "live mode" with:

```bash
npm run start:all
```

'Live mode' will run the ElectronJS application, start and watch the renderer build, then the **electron-reload** import will take care of refreshing the application window when the renderer is built (the rendered build can take a little while to catch up so you might have to give it a minute).

## Package Build Scripts

 * **clean:build**
 * **clean:dist**

 Do what they say on the tin.

 * **install:all** run on a fresh install to install the node modules in the main module and the renderer.
 
 * **build:desktop**
 * **build:renderer**
 * **build:renderer:prod** does a production build of the renderer.

 * **watch:renderer** builds the renderer in dev mode and watches the src directory for changes.
 
 * **start:desktop** runs the build desktop then starts it using Electron.
 * **start:all** 'live mode' watches the renderer and builds and starts the desktop.

 * **dist:win** uses *electron-packager* to package for windows. Uses the icon in `src/packager`
 * **dist:mac** (see above) also merges the plist file in `src/packager`

The two **dist** scripts use a variable to name the application package - the variable is defined differently depending on OS. If you are building the Mac app on Windows (or visa versa) the variable definition will probably need to be changed.

Todo: there is a way to get *electron-reload* to reload the whole application, that might be useful.


## Notes

### Renderer
The Angular project is a 'standard' CLI generated project with a few changes.

 1. The `<base href="">` should be set as shown.
 2. The code `const remote = (<any>window).require('electron').remote;` is enabled with `BroswerWindow` options in the main process.
 3. The Angular router needs this option to function in the Electron app: `RouterModule.forRoot(routes,{useHash: true})`.
 
Some other things to note:

 * If code executed inside an Electron Listener does not update the Angular UI then you may require [NgZone](https://angular.io/api/core/NgZone) - specifically `zone.run(...)`. (*It's a little like Swing executing something on the UI thread*).

### Features

 1. A stub of a service wrapping some of the ElectronJS remote app features in `ElectonAppSerivice`.
 2. [Flex Layout](https://github.com/angular/flex-layout) has been added to the Angular Project (because its cool).

## Todo

 * I feel like I should say *unit testing*.
 * It needs a distribution script for Linux.
 * This hasn't been tested on a Mac (yet).