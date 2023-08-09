import { Router } from "express";
import {register, login} from "../Controllers/auth.controller.js";

const rut = Router();

rut.post('/register', register);
rut.post('/login', login); 

export default rut; 
