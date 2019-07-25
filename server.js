const environment = process.env.NODE_ENV || 'development';
const express = require('express');
const server = express();
const cors = require('cors');
const faker = require('faker');
const Sequelize = require('sequelize');
const seqConfig = require('./config/config.js')[environment]
const sequelize = (process.env == 'development') ? new Sequelize('postgres://localhost/people') : new Sequelize(seqConfig.database, seqConfig.username, seqConfig.password, {host: seqConfig.host,dialect: seqConfig.dialect});
const PersonModel = require('./models/person')
const Person = PersonModel(sequelize, Sequelize)

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

server.set('port', process.env.PORT || 3000);
server.use(express.json());
server.use(cors());

server.get('/api/v1/people', (request, response) => {
  Person.findAll().then(people => {
    return response.status(200).json(people)
  })
  .catch((error) => {
    return response.status(500).json(error)
  })
})

server.get('/data', (request, response) => {
  Person.create({ name: faker.name.firstName(), nickname: faker.name.jobTitle(), birthyear: faker.random.number() }).then((data) => {
    response.redirect('/api/v1/people')
  })
  .catch((error) => {
    return response.status(500).json(error)
  })
});

// server.get('/api/v1/people/:id', (request, response) => {
//   const id = request.params.id;
//   database('people').where('id', id).select()
//   .then((person) => {
//     if (person.length) {
//       return response.status(200).json(person)
//     } else {
//       return response.status(404).json({ 
//         error: `No person found with id of ${id}`
//       })
//     }
//   })
//   .catch((error) => {
//     return response.status(500).json(error)
//   })
// });

server.listen(server.get('port'), () => {
  console.log(`You're now listening at localhost ${server.get('port')}`);
})
