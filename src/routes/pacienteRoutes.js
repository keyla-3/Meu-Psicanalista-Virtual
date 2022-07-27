const express = require('express');
const routes = express.Router();
const pacientesController = require('../controller/pacienteController');


routes.get('/listar', pacientesController.listarPacientes);
routes.get('/listar/:id', pacientesController.listarPacienteId);
routes.post('/cadastrar', pacientesController.cadastrarPaciente);




module.exports = routes;