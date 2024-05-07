require("dotenv").config();
require('./config/db.connection.js');
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = process.env;
const express = require("express");
const app = express();

app.use(express.urlencoded());
const ticketsRouter = require('./routes/tickets');
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/tickets', ticketsRouter)

app.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`));

