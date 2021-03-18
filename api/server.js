// Import Express
const express = require("express");

// Import our Accounts Router
const accountsRouter = require('./accounts/accounts-router.js')

// Instantiation of Express application
const server = express();

// Enable Express to parse JSON bodies
server.use(express.json());

// Funnel requests to this URL into the Accounts Router
server.use('/api/users', accountsRouter)

// Expose our Server to the outer world
module.exports = server;
