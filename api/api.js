const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

v1.post('/people/:id', async (req, res) => {
    const id = req.params.id;
    const people = req.body;
    try {
        await peopleService.updatePeople(id, people);
        res.sendStatus(HttpStatus.OK);
    } catch (e) {
        res.sendStatus(HttpStatus.NOT_FOUND);
    }
    
});

// To be implemented!

module.exports = app;
