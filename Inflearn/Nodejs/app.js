const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('form.html', (req, res) => {
    
})

app.get('/', (req, res) => {
    res.send('Hello home page');
}); 

app.get('/login', (req, res) => {
    res.send('Login please');
});

app.get('/route', (req, res) => {
    res.send('Hello Irene, <img src="/irene.jpg">')
});

app.get('/topic', (req, res) => { 
    let topics = [
        'Javascript is .....', 
        'Nodejs is .....', 
        'Express is .....'
    ];

    let output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
    `
 
    res.send(output);
});

app.listen(3000, () => {
    console.log('Connected 3000 port!');
}); 