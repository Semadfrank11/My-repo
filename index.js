import express from "express";
import app from "./app.js";
import {db} from "./db.js";

db();
app.use(express.json()); 
app.listen(4100, () => {
    console.log('Servidor activo en puerto 4100')
})