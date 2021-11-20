
const config = require('./server/src/config');
const express = require('express');
const app = express();
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const logger = require('./server/src/utils/logger');
const cors = require('cors');
const mongoose = require('mongoose');
const mongooseConnection = mongoose.connection;

//middleware
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

// CORS middleware
app.use(cors());

//routes
const memberRoutes = require('./server/src/routes/member-routes');
memberRoutes(app, logger);

//mongo database connection
mongoose.connect(`mongodb+srv://kamal-prakash:${process.env.MONGO_ATLAS_PW}@practiceprojectcluster.vgaam.mongodb.net/membersearch?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongooseConnection.on("error", console.error.bind(console, `connection error`));
mongooseConnection.once("open", (cb) => {
  logger.info(`connection successulful to mongodb atlas`);
});

//create http server and listen  to a port
const port = 3000;
const server = http.createServer(app);
  server.listen(port, () => {
    logger.info(`listening on port ${port}!`);
});