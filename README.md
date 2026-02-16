# blogs-app-react-native-web
React Native + Web demo blogging app

Server:
The sole purpose of this project is to provide basic API functionality to
react native+web blogs app project.

To run project:
Step 1: please install dependencies run "npm i"
Step 2: Start the server with "npm start"

Web and Mobile:
Note :- To run the project with functionality, please run the server first.


It is basically a react native + web app, which does works on both mobile device and browser.
"code once, render everywhere"

Step 1: please install all the dependencies run "npm i"
Step 2: please provide API Host on which server running in "./src/config/config.js":
Ex: module.exports = {
    apiHost : "http://192.168.0.0:4000"
}
Step 3: To run web version run "npm run web"
Step 4: To run mobile version run "npm run install"
Step 5: if it shows an error with message can find module "./index"
please run "npm start" in a different terminal then repeat step 3.

Info: it does contains basic functionality of adding blogs and upvoting,
the design is not much friendly. 
