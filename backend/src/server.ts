import express, { request, response } from 'express';

import './database/connection';

const app = express();

app.get('/users', (request, response) => {
    return response.json({ message: 'Back-end rodando'});
});

app.listen(3333);