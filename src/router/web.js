import express from "express";
import HomeController from '../controller/HomeController';
let router = express.Router();
const initWebRoute = (app) =>{
    router.get('/',HomeController.getHomePage);

router.get('/about',(req, res) =>
{
    res.send('Im Thai')
})
return app.use('/', router)
}

module.exports = initWebRoute;