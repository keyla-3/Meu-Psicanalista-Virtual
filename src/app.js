require('dotenv-safe').config();
const express = require('express');
const cors = require('cors');
const db = require('./database/mongoConfig');
const pacientesRoutes = require('./routes/pacienteRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.status(200).json({
        title: "Reprograma -> Meu Psicanalista Virtual",
        version: "1.0.0",
        mensagem: "Precisa de um help? Meu psicanalista virtual está aqui para segurar sua mão e nunca mais soltar."
    });
});
app.use('/pacientes', pacientesRoutes);

db.connect();



module.exports = app;