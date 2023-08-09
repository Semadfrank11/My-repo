import express from "express";
import morgan from "morgan";
import authRouts from "./Src/Routes/auth.routes.js" 

const app = express();
app.use(morgan('dev')); 
app.use("/api", authRouts); 
export default app; 