const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const passport = require("passport")
const users  = require('./routes/api/users')
// starts the app
const app = express();

// body parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(bodyParser.json())
// database configuration
const db = require('./config/keys').mongoURI
// initialize database connection
mongoose
.connect
(db,
{
    useNewUrlParser: true,
    useUnifiedTopology: true

},


)
.then(()=> console.log('Database connected successfully'))
.catch((err) => console.log(err))
// passport middleware
app.use(passport.initialize())

// passport config
require('./config/passport')(passport)
app.use('/api/users', users)
const port = process.env.PORT || 5000

app.listen(port,() => console.log(`Server is running on port ${port}`))