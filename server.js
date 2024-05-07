require("dotenv").config();
require('./config/db.connection.js');
const { PORT } = process.env;
const express = require("express");
const app = express();

const ticketsRouter = require('./routes/tickets');

app.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`));

