const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello home page');
}); 

app.get('/login', (req, res) => {
    res.send('Login please');
});

app.get('/route', (req, res) => {
    res.send('Hello Irene, <img src="/irene.jpg">')
});

app.listen(3000, () => {
    console.log('Connected 3000 port!');
}); 