const Pacientes = require("../model/pacienteSchema");


const listarPacientes = async (request, response) => {
    const pacientes = await Pacientes.find();
    response.status(200).json({
        "mensagem": "Lista de todos os pacientes:",
        pacientes
    });
}

const listarPacienteId = async (request, response) => {
    const paciente = await Pacientes.findById(request.params.id);
    response.status(200).json({
        "mensagem": `Paciente com id ${request.params.id} encontrado:`,
        paciente
    })
}

const cadastrarPaciente = async (request, response) => {
    const { nome, contato, email, dataNascimento, endereco, trabalhoStatus, horarioAtendimento } = request.body;

    const novoPaciente = new Pacientes({
        nome,
        contato,
        email,
        dataNascimento,
        endereco,
        trabalhoStatus,
        horarioAtendimento
    });

    const salvarPaciente = await novoPaciente.save();

    response.status(201).json({
        "mensagem": "Cadastro realizado com sucesso.",
        salvarPaciente
    });
}

const atualizarPaciente = async (request, response) => {
    const { nome, contato, email, dataNascimento, endereco, trabalhoStatus, horarioAtendimento } = request.body;

    const paciente = await Pacientes.findById(request.params.id);

    if(paciente) {
        paciente.nome = nome || paciente.nome
        paciente.contato = contato || paciente.contato
        paciente.email = email || paciente.email
        paciente.dataNascimento = dataNascimento || paciente.dataNascimento
        paciente.endereco = endereco || paciente.endereco
        paciente.trabalhoStatus = trabalhoStatus || paciente.trabalhoStatus
        paciente.horarioAtendimento = horarioAtendimento || paciente.horarioAtendimento


        const atualizarPaciente = await paciente.save();

        response.status(200).json({
            "mensagem": "Atualização feita com sucesso.",
            atualizarPaciente
        });
    }
}


module.exports = {
    listarPacientes,
    listarPacienteId,
    cadastrarPaciente,
    atualizarPaciente
}