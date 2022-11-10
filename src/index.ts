import errorMiddleware from './middlewares/error.middleware';
import serverRouter from './routers/server.router';
import * as path from 'path';
import express = require("express");
// import cors from "cors";
// import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";

dotenv.config({path: path.resolve(__dirname, "../.env")});

async function start() {
    const app = express();

    // app.use(cors({
    //     credentials: true,
    //     origin: ["http://127.0.0.1:3000", "http://localhost:3000", "http://127.0.0.1:19245", "http://localhost:19245"]
    // }));
    // app.use(cookieParser())
    // app.use(express.json({extended: true, limit: '100mb'}));
    // app.use(express.static(path.resolve(__dirname, '../client')));
    app.use('/api', serverRouter);
    app.use(errorMiddleware);

    // app.get('/*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, '../client/index.html'));
    // });

    const PORT = process.env.PORT;
    await app.listen(PORT, () =>
        console.log('Server listening on http://127.0.0.1:' + PORT)
    );
}

start();
