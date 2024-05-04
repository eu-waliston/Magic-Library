const express = require("express");
const DOC = express.Router();

const swaggerUi = require("swagger-ui-express");
const APIDocumment = require("../../doc/ApiDoc.json");

DOC.use("/magic-library/api/v1/doc", swaggerUi.serve, swaggerUi.setup(APIDocumment));

module.exports = DOC;