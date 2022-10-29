import express from 'express';
import initWebRoute from './router/web'
import configViewEngine from './configs/viewengine';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoute(app);
app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
})