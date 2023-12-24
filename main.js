const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const test = require("./middleware/test");
const port = 5000;
const route = require("./routes/index");
const connectDB = require("./database/db");
const authroutes = require("./routes/auth");
app.set("view engine","pug");
app.use(test);
app.use(bodyparser.json());
app.use(route);
app.use("/auth",authroutes);
connectDB().then(
app.listen(port,()=>{
    console.log(`the server is listen on ${port}`);
})
)

