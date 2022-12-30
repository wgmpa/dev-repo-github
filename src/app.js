import express, {Router} from 'express'
import cors from 'cors'

import userRoutes from './routes/usersRoutes'

import "./database/index"

class App{
    constructor(){
        this.server = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.server.use(express.json());
        this.server.use(cors());
        this.routes()

    } 

    routes(){
        this.server.use(userRoutes)

            } 
}

export default new App().server