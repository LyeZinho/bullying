const express = require('express');
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

//Rota para o sub dominio esp [Sub dominio principal]

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/css', function(req, res){
    res.sendFile(path.join(__dirname, '/styles.css'));
});

app.get('/imgsrc/:imagesrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imagesrc));
});

app.listen(port, () => {
  console.log(`Site rodando na porta port ${port}`)
})