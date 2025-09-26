const express = require("express");
const databaseConnection = require("./database.js");
const softwareRouter = require("./routes/software.route.js");

const cors = require("cors");

databaseConnection();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "https://digital-marketing-eight-rho.vercel.app",  // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.get("/",(req, res)=>{
    res.send("Welcome Back Sir");
});

app.use('/software', softwareRouter)



app.listen(5299, ()=>{
    console.log("PORT listen to 5299")
});