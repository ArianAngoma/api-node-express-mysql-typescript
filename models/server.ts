import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from '../routes/user';
import db from "../db/connection";

class Server {
    private app: Application;
    private readonly port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';

        // DB
        this.dbConnection();


        // Middlewares
        this.middlewares();

        // Definir las rutas
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            await db.sync({force: false});

            console.log('DB online');
        } catch (err){
            throw new Error(err)
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta public
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }
}

export default Server;