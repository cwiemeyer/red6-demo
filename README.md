# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Necessary Plugins and Prerequisites

As a base this project uses NodeJS with Version: v16.17.1

In addition to that, the widely-used package manager NPM (containing NPX) is used with Version: 8.15.0 

To display this locally started web application being a so called "Single Page Application", you need any web browser 
of your choice and we recommend to use it in the newest version.
For example: Google Chrome Version >=106.x, Mozilla Firefox >=102.x, Microsoft Edge >=106.x

### Prerequisites to run this application

First you have to install NodeJS and NPM with NPX on your machine. 
Either via downloading an installation package of these tools for your Operating System 
from the official website of NodeJS and NPM: https://nodejs.org/ - or by using helpful package managers
for your Operating System like 'yarn', 'homebrew' or similar to install NodeJS and NPM to be able to run 
this application and it's dependencies on your machine.

Newest packages of NodeJS on the official website contains NPM, see here for download: https://nodejs.org/en/download/

For further information please visit the official documentation of NodeJS and NPM.

Documentation of NodeJS: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
Documentation of NPM: [https://docs.npmjs.com/](https://docs.npmjs.com/)

## Available Scripts

In the project directory, you can run the following commands from your shell, 
when the prerequisites above are fulfilled:

### `npm install`

Installs all the dependencies required for the application to be able to run.

Important: as prerequisites you first have to install the basic dependencies for this application. 
You can find the prerequisites above in the subheadline "Prerequisites to run this application".

### `npm start`

Runs the app in the development mode.\
When started correctly locally, you can start it with the any of the above mentioned web browsers on your local machine.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes to the code.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Use of Task List application

### Initial start of the Task List application

After having installed NodeJS and NPM package manager from the prerequisites section you can start the app as described above 
by using `npm start`.

Initially there are three basic example tasks created, coming from a DATA object mocked in the index.js as a constant: 
Eat, Sleep, Repeat

### Using a data source from an API or file to create custom Task Items within the Task List

The index.js holds a boiler-plate of a fetch call to request a custom set of task data from any API.
So you can easily switch and use any custom set of task data via an API by deleting or commenting out the example DATA 
constant object and instead fetching data from an actual external API to retrieve your data.

Please make sure the data structure within the custom data object matches the structure of the example or you need to 
adjust the code, when changes to the data structure are made.

This offers the possibility to extend and change the data structure to use fast and easy.

Also please make sure to catch errors by "try, catch"-blocks or similar request callbacks when making 
the external API request to avoid errors, when external data cannot be retrieved for any reasons like API downtimes.

### Adding new Tasklist Task Items via frontend



## Learn More

This and the next chapters are standard chapters and information provided by the create-react-app setup. But they are
generally useful when working with React applications.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
