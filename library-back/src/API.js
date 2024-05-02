const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotend").config();

const API = express();

require("../config/DB-Connection");

//midlewarres
API.use(express.json());
API.use(express.urlencoded({ extended: true }));
API.use(cors());
API.use(helmet());

//Routes
const UserRouter = require("./View/User.View");
const BookRouter = require("./View/Book.View");
API.use("/", UserRouter);
API.use("/", BookRouter);

API.listen(process.env.PORT, () => {
    console.log(`API listening on PORT ${process.env.PORT}`);
})
