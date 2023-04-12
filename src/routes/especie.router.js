const express = require('express');
const router = express.Router();
const especieController = require('../controller/especie.controller')
router
    .get('/', especieController.get)
    .get('/:id', especieController.getById)
    .post('/', especieController.create)
    .put('/:id', especieController.update)
    .delete('/:id', especieController._delete)

module.exports = router;