const express =require("express");
const bodyparser=require("body-parser");   //default middleware..to parse(read or understand --parse means) the json object
const CONSTANTS =require("./config/constant")
const registerRouter = require("./routes/register")
const loginRouter=require("./routes/login")
// const PORT = 3001;

const app=express();
app.use(bodyparser.json());
app.use(registerRouter);
app.use(loginRouter)

app.listen(CONSTANTS.PORT,()=>{
    console.log(`server is listening at http://localhost:${CONSTANTS.PORT}`);
})
