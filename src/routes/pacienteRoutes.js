const express = require('express');
const routes = express.Router();
const pacientesController = require('../controller/pacienteController');


routes.get('/listar', pacientesController.listarPacientes);
routes.get('/listar/:id', pacientesController.listarPacienteId);
routes.post('/cadastrar', pacientesController.cadastrarPaciente);
routes.put('/atualizar/:id', pacientesController.atualizarPaciente);
routes.delete('/deletar/:id', pacientesController.deletarPaciente);




module.exports = routes;