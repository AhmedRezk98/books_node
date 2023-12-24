const express = require("express");
const bookrouter = express.Router();
const test = require("../middleware/test");
const bookcontroller = require("../controllers/Bookcontrooler");
bookrouter.use(test).route("/").get(bookcontroller.index).post(bookcontroller.create)
bookrouter.route("/:id").get(bookcontroller.show).patch(bookcontroller.update).delete(bookcontroller.delete)

module.exports = bookrouter;