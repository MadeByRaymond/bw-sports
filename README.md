# BW SPORTS, Live Fixtures and Match Updates

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
A live demo of this project has been deployed to heroku and can be accessed [Here](https://bw-sports.herokuapp.com).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Description

This project was built using React.js. It is a single page web app making use of React Built Routers to navigate through project links.

*This took roughly four days to complete as the work had to be scheduled with my daily work activities.*

**The functionality I am most proud of is the real-time data being passed in each league/competition page. Information on the upcoming matches and `recently updated/on going` match scores being provided to user about each league.**

**Managements of data and information are done through states and props. As such, changes to the data passed to each component and widget are automatically captured and rendered to the browser.** 

**The data being passed through states and props are however being managed by Redux. Redux is an open-source JavaScript library for managing application state.** 

<hr>

Using Redux, data that is needed in each component is stored in a global store, and can be accessed by any application component ant any point in time.
Each resuable data are being implemented with Redux, including at the application's header and footers.

Custom stylings where added to the project, while bootstrap was used to handle responsiveness of the application to different screen sizes.
jQuery was also adopted to handle interactions of some components such as the slider and home counter.

A list of all project installed dependencies are listed below.

### Redux and React-Redux
Used for state managements and work working with props

### Axios
Used for fetching and returning data from https://www.football-data.org api and other available apis

### React-Helmet
(Installed but not used) Was intended to be used to add required tags to the header of selected routes

### React-Router-Dom
Used to manage React Links and Routers

### Redux-Promise
Used as a redux middleware to manage asynchronous running of action promises

### React-Simple-Sidenav
A React Sidenav Plugin used in application's mobile view to access navigation/header links

### Bootstrap
Handling project application responsiveness to different screen sizes

### jQuery

### FontAwesome
