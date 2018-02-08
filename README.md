# Predica Recruitment Task

This is a **ToolBox** Application that builds a collection of randomly generated URLs placed in randomly generated categories.

The **ToolBox** fetches data from an API written in Node.js, hosted on [Heroku](https://heroku.com/). You can see the code I used for the API server [here](https://github.com/EnslavedEagle/recruitment-task-predica-backend).

**[>> See live version of this application! <<](http://tth.patrykb.pl/predica)**

## Local installation

#### Getting the API working locally

* Clone the backend [repository from here](https://github.com/EnslavedEagle/recruitment-task-predica-backend),
* `npm install` or `yarn install` the API project,
* `npm start` or `yarn start` the API project.  
  * this application won't work locally without the backend server running, unless you build it using `prod` environment, which uses API hosted on Heroku.

#### Getting this app to work locally
* Clone this repository `git clone https://github.com/EnslavedEagle/recruitment-task-predica.git`
* `cd recruitment-task-predica`
* `npm install` or `yarn install` to fetch all dependencies
* `yarn start` to run the application, the browser should open automatically.
  * go to `http://localhost:4200` if it didn't.

## Stuff used

* Angular 5
* Sass
* Bootstrap 4
* Angular Material
* [Loading.io](https://loading.io/) to generate an animated loader