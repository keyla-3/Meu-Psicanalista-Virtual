const Pacientes = require("../model/pacienteSchema");


const listarPacientes = async (request, response) => {
    const pacientes = await Pacientes.find();
    response.status(200).json({
        "mensagem": "Lista de todos os pacientes:",
        pacientes
    });
}



module.exports = {
    listarPacientes
}