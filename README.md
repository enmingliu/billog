# billog

Blog web app designed to showcase Bill's software/hardware projects. Built in React, Node.js, and Express!

TODO: Deploy node.js app on Heroku

## Running the website

1. To install the dependencies required for the Node.js app, issue the following command.

    `npm i body-parser cors express helmet morgan`

2. To install the dependencies required for auth0, issue the following command.

    `npm i express-jwt jwks-rsa auth0-js`

3. To begin running the Express app issue the following command from the backend directory.

    `node src`

4. To install the dependencies required for the React app, issue the following command.

    `npm i react-router react-router-dom axios`

5. To begin running the React app issue the following command from the frontend directory.

    `npm start`

## Redeploying the website

1. To redeploy the web app, issue the following command inside the frontend directory.

    `npm run deploy`

2. To visit the deployed website, go to the following web address.

    `https://eprotagoras.github.io/billog/`