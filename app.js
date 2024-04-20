import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./Database/dbconnection.js";
import { errController } from "./error/error.js";
import resBookingRouter from "./routes/resBooking.js";

const app = express();

dotenv.config( {path : "./config/config.env"} );

app.use(cors
    (
        {
            origin : [process.env.FRONTEND_URL,"http://localhost:5173"],
            methods : ["POST"],
            credentials : true,

        }
    ) 
);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(
    "/api/v1/resBook", resBookingRouter);

dbConnection();

app.use(errController);

export default app;