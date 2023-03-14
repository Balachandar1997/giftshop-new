import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import cards from './dbShop.js'
//app config
const app=express()
const port =process.env.POST || 8000
const connection_url='mongodb+srv://admin:admin@cluster0.ydwqkw5.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true });
 mongoose.connection.once("open", () => {
  console.log("db connected successfully");
 });

//API endpoint
app.get("/",(req,res)=>res.status(200).send("Hello Bala"))

app.post("/flora/gifts", (req, res) => {
  const dbShop = req.body;
  cards.create(dbShop)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err));
});
  
  app.get("/flora/gifts", (req, res) => {
    cards.find()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err));
  });
  

//Listeners
app.listen(port,()=>console.log(`Listening on Localhost:${port}`))

// import express from "express";
// import mongoose from "mongoose";
// import Cards from "./dbShop.js";
// import Cors from "cors";
// import * as dotenv from "dotenv";
// dotenv.config();

// //App Config
// const app = express();
// const port = process.env.PORT || 8001;
// const connection_url =
//   "mongodb+srv://admin:admin@cluster0.ydwqkw5.mongodb.net/giftshop?retryWrites=true&w=majority";

// //Middleware
// app.use(express.json());
// app.use(Cors());

// //DB Config
// mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once("open", () => {
//   console.log("db connected successfully");
// });

// //API Endpoints
// app.get("/", (req, res) =>
//   res.status(200).send("<h1>tinder mern project <h1>")
// );

// app.post("/flora/gifts", (req, res) => {
//   const dbCard = req.body;
//   Cards.create(dbCard, (err, data) => {
//     if (err) res.status(500).send(err);
//     else res.status(201).send(data);
//   });
// });

// app.get("/flora/gifts", (req, res) => {
//   Cards.find((err, data) => {
//     if (err) res.status(500).send(err);
//     else res.status(200).send(data);
//   });
// });

// //Listeners
// app.listen(port, () => console.log(`Listening on localhost: ${port}`));