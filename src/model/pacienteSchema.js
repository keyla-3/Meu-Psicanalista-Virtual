const mongoose = require('mongoose');


const pacientesSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    contato: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dataNascimento: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    trabalhoStatus: {
        type: String,
        enum: ['trabalhando', 'desempregado', 'freelancer'],
        required: true,
        default: 'trabalhando'
    },
    horarioAtendimento: {
        type: String,
        enum: ['manha', 'tarde', 'noite'],
        default: 'manha',
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('paciente', pacientesSchema);