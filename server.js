const express = require('express'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      path = require('path'),
      app = express();

const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

// const MONGODB_URI = 'mongodb+srv://dbevent:dlF0etwm4tZDHV7T@cluster0.0ehgr.mongodb.net/eventdb?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected!");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('event-management-system/build'));
}

// HTTP request logger
app.use(morgan('tiny'));
app.use('/',routes);

app.listen(PORT, console.log("Server has started!"));