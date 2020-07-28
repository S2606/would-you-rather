# Would-You-Rather Project

Project for playing a very interesting game(would you rather ... or ...).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TL;DR

To get started right away:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

## File Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
│   └── 404NotFound.png
│   └── sarah.png
│   └── john.png
│   └── tyler.png
└── src
    ├── App.css # Styles for app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing.
    ├── Actions # for handling business logic
    │   └── authedUser.js
    │   └── users.js
    │   └── questions.js
    │   └── shared.js
    ├── Components # for handling presentation logic
    │   └── AnswerQuestion.js
    │   └── App.js
    │   └── AuthedRouter.js
    │   └── Dashboard.js
    │   └── Leaderboard.js
    │   └── Login.js
    │   └── NavBar.js
    │   └── NewQuestion.js
    │   └── NotFoundError.js
    │   └── QuestionListItem.js
    ├── Middlewares # for handling logic between operations
    │   └── index.js
    │   └── logger.js
    ├── Reducers # for handling store maintainence
    │   └── index.js
    │   └── authedUser.js
    │   └── users.js
    │   └── questions.js
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```
