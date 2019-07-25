const environment = process.env.NODE_ENV || 'development';

const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration);
const express = require('express');
const server = express();
const cors = require('cors');
const faker = require('faker');

server.set('port', process.env.PORT || 3000);
server.use(express.json());
server.use(cors());

server.get('/api/v1/people', (request, response) => {

  console.log(database.connection())
  database('people').select()
  .then((people) => {
    return response.status(200).json(people)
  })
  .catch((error) => {
    return response.status(500).json(error)
  })
});




server.get('/data', (request, response) => {
  database('people').insert({name: `${faker.name.firstName()} ${faker.name.lastName()}`, nickname: faker.name.jobTitle(), birthyear: faker.random.number()})
  .then((data) => {
    response.redirect('/api/v1/people')
  })
  .catch((error) => {
    return response.status(500).json(error)
  })
});

server.get('/api/v1/people/:id', (request, response) => {
  const id = request.params.id;
  database('people').where('id', id).select()
  .then((person) => {
    if (person.length) {
      return response.status(200).json(person)
    } else {
      return response.status(404).json({ 
        error: `No person found with id of ${id}`
      })
    }
  })
  .catch((error) => {
    return response.status(500).json(error)
  })
});

server.listen(server.get('port'), () => {
  console.log(`You're now listening at localhost ${server.get('port')}`);
})
