# MERN App on Heroku

Deployed application can be found at: https://evening-fjord-70661.herokuapp.com/

## About This Template

This setup allows for a MongoDB, Express, React, and Node.js app which can be deployed to Heroku.

The front-end React app will auto-reload on save as it's updated via webpack dev server, which is included in the `react-scripts`.

The backend Express app will auto-reload on save independently with nodemon.

Concurrently is used to assist with running both the front and the back apps at the same time.

## Starting the app locally

Start by installing front and backend dependencies. While at the root directory, run the following command:

```
npm install
```

This will install node modules within the root direcotry and the client directory.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any HTTP requests from the client.

## Deployment

The scripts listed in the root `package.json` are setup to inform Heroku on how to install the necessary node modules and build your React app. Deploying to Heroku can be accomplished with the Heroku CLI or by creating a Heroku app at heroku.com and connecting it to the GitHub repository for your whole app. There are other ways, but these are the two most common.

## Resources Used

- What is Morgan?: https://www.loggly.com/ultimate-guide/node-logging-basics/#:~:text=Morgan%20is%20a%20HTTP%20request,to%20manually%20create%20these%20logs.
- Mongoose: https://mongoosejs.com/docs/
- Mongoose with Express: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- React Router: https://reactrouter.com/web/guides/quick-start
- Private Routes & AuthContext: https://www.youtube.com/watch?v=unr4s3jd9qA
-
