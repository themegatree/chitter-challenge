# Chitter Challenge

This is my submission for the Chitter Challenge. Full instructions can be found [here](./instructions.md).

## Dependancies

This project makes use of a lot of dependancies:
- `bcryptjs`: to encrypt passwords
- `cypress`: for test code
- `dotenv`: to handle enviromental variables
- `ejs`: to display HTML
- `express`: to handle requests
- `express-session`: to handle sessions
- `nodemon`: to render webpage
- `sequelize`: to edit databases
- `sequelize-cli`: to create databases

You will also need to install PSQL before downlaoding this project.

---

## Installation


This project can be installed through Git:

```Git 
$ git clone https://github.com/themegatree/chitter-challenge
```

Rename the `.env.example` file to `.env` and add your PSQL login details to the file.

Then to install dependencies:
```bash
$ npm install
```

Then create database and tables with:
```bash
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
```

To view the application use:
```bash
node app.js
```

or use: 
```bash
$ npx nodemon app.js
```

Then navigate to the address displayed in the command terminal (by default set to `http://localhost:3000`).

---

## Running the Tests

To run tests use 
```bash
$ npx nodemon app.js
```
to open the project then run:
```bash
npx cypress open
```
in a new terminal to view all the tests.

---

## Accepance Criteria

Passing tests for the acceptance criteria can be found in [`feature-test.spec.js](./cypress/integration/feature-test.spec.js).

---

<!-- ## Extended Criteria

--- -->

## Appoach

I wrote a process model and domain model (see below). I then converted the user stories into feature tests. Then I wrote source code so that the tests pass.

---

## Process Model
Client | | Browser | | Server
---| --- |--- |--- | ---
| | | | 
===> | Run `node app.js` | ===> | LISTEN request | ===>
<===| Console log port number | <=== | Port number found | <===
| | | | 
===> | Home Page URL | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `index.ejs` | <===
| | | | 
===> | Register page | ===> | GET request | ===>
<===| Render HTML | <=== | Render `register.ejs` | <===
===> | Register Button | ===> | GET request | ===>
<===| Render HTML | <=== | Redirect to `/register` | <===
| | | | 
===> | Submit registition details | ===> | GET request | ===>
<===| Render HTML | <=== | Redirect to `/` | <===
| | | | 
===> | Input peep | ===> | POST request | ===>
<===| Render HTML | <=== | Response HTML `register.ejs` | <===
| | | | 

---

## Database Schema

### User
Responsibilities | Collaborators
--- | ---
id | Posts
Username | 
Password | 



### Post
Responsibilities | Collaborators
--- | ---
Message | Users
UserId | 
Username | 
Timestamp |