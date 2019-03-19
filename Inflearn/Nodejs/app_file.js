const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('views', './views'); 
app.set('view engine', 'jade');

app.post('/topic', (req, res) => {
    let title = req.body.title; 
    let description = req.body.description; 
    
    fs.writeFile('data/' + title,description, (err) => {
        if(err) {
            res.status(500).send('Internal Server Error');
        }
        res.send('success');
    }); 
});

app.get('/topic/new', (req,res) => {
    res.render('new');
});

app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});