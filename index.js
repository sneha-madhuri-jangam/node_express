import  express from "express";
import bodyParser from "body-parser";

import routes from "./routes/users.js";
const app=express();
const PORT=5000;

app.use(bodyParser.json());

app.use("/users",routes);


// app.get("/",(req,res)=>{
//     res.send("helloworld");
// });


app.listen(PORT,()=>console.log("server is running"));

