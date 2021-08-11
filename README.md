# Chitter Challenge

This is my submission for the Chitter Challenge. Full instructions can be found [here](./instructions.md).

---

## Dependancies

---

## Installation

This project can be installed through Git:

```Git 
$ git clone https://github.com/themegatree/chitter-challenge
```

Then to install dependencies:
```bash
$ npm install
```

To view the application use:
```bash
node app.js
```

Then navigate to the address displayed in the command terminal (by default set to `http://localhost:3000`).

---

## Running the Tests

---

## Accepance Criteria

---

## Extended Criteria

---

## Appoach

---

## Domain Model 

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
===> | Input user details | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `message-board.ejs` | <===
| | | | 
===> | Register Button | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `register.ejs` | <===
| | | | 
===> | Submit registition details | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `index.ejs` | <===
| | | | 
===> | Input peep | ===> | POST request | ===>
<===| Render HTML | <=== | Response HTML `register.ejs` | <===
| | | | 

---

## Database Schema

### User
Responsibilities | Collaborators
--- | ---
id | 
Username | 
Password | 



### Post
Responsibilities | Collaborators
--- | ---
Message | Users
Username | 
Timestamp |