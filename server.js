
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

//middleware
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, 'public')))

// CORS middleware
app.use(cors());
//routes
const memberRoutes = require('./server/src/routes/member-routes');
memberRoutes(app, logger);

//database 

//create http server and listen  to a port
const port = 3000;
const server = http.createServer(app);
server.listen(port, () => {
  logger.info(`Server started on port port ${port}`);
});