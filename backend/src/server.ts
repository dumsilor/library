import express from "express";
import cors from "cors";
// import * as fs from 'node:fs';
import { sample_books } from "./books";
const app = express();

const corsOptions = {
    // origin: 'http://localhost:4200', // Allow only this origin
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    // credentials: true, // Allow cookies to be sent and received
  };
+
app.use(express.json())
app.use(cors(corsOptions))

app.get("/ip",(req,res)=>{
    res.send(`You are visiting from ${req.socket.remoteAddress}`)
})

app.get("/api/books",(_req,res)=>{
    res.send(sample_books)
})

// app.post("/api/books/:id",(req,res){
//     const body = req.body['id']
// })

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`App started on port http://localhost:${PORT}`)
})