const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Pagina inicial");
})

app.get("/comprar",function(req,res){
    res.send("Compre algo aqui!!!");
})

app.get("/vender",function(req,res){
    res.send("Venda algo aqui!!!");
})


app.listen(4000,function(erro){
    if (erro){
        console.log("Erro ao iniciar");
    }else{
        console.log("Servidor iniciado")
    }
})