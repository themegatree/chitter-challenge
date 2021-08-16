const express = require('express')
const app = express()
const port = 3000

const session = require('express-session')
app.use(session({
    secret: 'chitter',
    resave: false,
    saveUninitialized: true,
  }))

const methodOverride = require('method-override')

app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + 'public'))

const indexRouter = require("./routes/index.js");
app.use("/", indexRouter);

const registerRouter = require("./routes/register.js");
app.use("/register", registerRouter);

const signinRouter = require("./routes/signin.js");
app.use("/signin", signinRouter)

const postRouter = require("./routes/new-post.js");
app.use("/new-post", postRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })