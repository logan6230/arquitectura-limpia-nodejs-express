const express = require('express');
const especieRouter = require('./especie.router');


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/persons', especieRouter)
}
module.exports = routerApi;