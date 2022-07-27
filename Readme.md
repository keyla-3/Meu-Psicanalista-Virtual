# MEU PSICANALISTA VIRTUAL

## 💻 Sobre o projeto 

O Projeto Meu Psicanalista Virtual surgiu em 2020 no âmbito da pandemia da COVID19 quando foi necessário o isolamento social como forma de reduzir a propagação do vírus. 

Criado pela Assistente Social e Psicanalista Marineuza Santos funciona através de um grupo de whatsapp, onde profissionais voluntários fornecem terapia gratuita a pacientes de baixa renda que necessitam de atendimento psicológico.

Ao ingressar no grupo, pacientes, quando consideram oportuno, realizam um
cadastro e o pagamento no valor de R$ 15.00, o que lhe assegura oito sessões online (WhatsApp vídeo ou Google Duo) com 30 minutos de duração, em dia e horário previamente agendado com o profissional escolhido. 

As consultas podem ocorrer semanal, quinzenal ou mensal no horário. Ao final das oito sessões, caso seja do interesse do paciente, ele segue em atendimento com sessões em duas modalidades de preço:

R$ 35.00 = 30 minutos
R$ 50.00 = 1 hora


## 🚀 API Meu Psicanalista Virtual

O projeto visa criar uma API, que irá conectar profissionais interessados em participar do projeto e os clientes interessados em utilizar o serviço.

Para os pacientes, a princípio, será necessário o cadastro dos dados a seguir:

- Nome
- Contato
- Email
- Data de nascimento
- Endereço
- Situação econômica (se está trabalhando ou desempregado)
- Melhor horário de atendimento (manhã / tarde / noite)
- Mensagem de que a equipe entrará em contato

Para o cadastro do profissional serão necessários os dados seguir:

- Nome
- Contato
- Email
- Formação
- Instituição
- Se já concluiu o curso
- Se não concluiu, qual semestre está cursando
- Mensagem de que a equipe entrará em contato

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

## ⚙️ Funcionalidades/Objetivos

- Listar todos os pacientes que estão cadastrados no sistema;
- Cadastrar os pacientes no sistema;
- Atualizar os dados desse paciente no sistema;
- Deletar o cadastro desse paciente do sistema;

## 🛠️ Tecnologias utilizadas nesse projeto

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps) 

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)

## 📁 Arquitetura MVC 

```
 📁 MEU-PSICANALISTA-VIRTUAL
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 pacienteController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |
   |
   |    |- 📁 models
   |         |- 📑 pacienteSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 pacienteRoutes.js 
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```

## 🔃 Rotas

* local: http://localhost:9090

* Heroku: https://meu-psicanalista-virtual.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

