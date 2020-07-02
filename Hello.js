const express = require('express');
const app = express();

const port = 8080;

app.get('/', (request, response) =>  
{
    const Hello = {answer : "Hello World!"};
    response.send(JSON.stringify(Hello.answer));
}).listen(port);