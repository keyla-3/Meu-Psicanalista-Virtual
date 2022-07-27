const express = require('express');
const routes = express.Router();
const pacientesController = require('../controller/pacienteController');


routes.get('/listar', pacientesController.listarPacientes);




module.exports = routes;