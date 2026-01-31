import express from 'express';
import path from 'path';
import router from './router';
import routerAdmin from './router-admin';
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/config';

import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions'
});

/** 1-ENTRANCE **/ 
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/ 
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 3  // 3h
        },
        store: store,
        rolling: true,   // 10:30 auth => 13:30 gacha saqlanadi! TRUE holatida 
                        // 12:00 da kiradigan bo'lsak auth vaqti 12:00 dan 15:00 gacha davom etadi!
                        // Agar FALSE bo'lsa 13:30 gacha qolaveradi! 
        saveUninitialized: true,
    })
);

/** 3-VIEWS **/ 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/ 
app.use("/admin", routerAdmin);   // BSSR: EJS
app.use("/", router);             // SPA: REACT           // Middleware Design Pattern


export default app;     // CommonJS >>> module.exports = app;