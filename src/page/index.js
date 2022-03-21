const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

//Rota para o sub dominio esp [Sub dominio principal]

datarouter.get('/home/css', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

datarouter.get('/home/css', function(req, res){
    res.sendFile(path.join(__dirname, 'style.css'));
});

datarouter.get('/imgsrc/:imagesrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imagesrc));
});

app.listen(port, () => {
  console.log(`Site rodando na porta port ${port}`)
})