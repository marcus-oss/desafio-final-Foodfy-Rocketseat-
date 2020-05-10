
const express = require('express')
const nunjucks = require("nunjucks")
const routes = express.Router()
const server = express()
server.use(express.static('public'))
server.set("view engine" , "njk")
nunjucks.configure("views" ,{
  express:server
})
server.get("/",function(req,res){
  return res.render("homeFoodyfy")
})

server.get("/Sobre",function(req,res){
  return res.render("Sobre")
})

server.get("/EditReceitas",function(req,res){
  return res.render("EditReceitas")
})



server.get("/CadastrarReceitas",function(req,res){
  return res.render("CadastrarReceitas")
})


server.get("/Receitas",function(req,res){
  return res.render("Receitas")
})

server.get("/homeFoodyfy",function(req,res){
  return res.render("homeFoodyfy")
})


routes.get('/CadastrarReceitas',function(req,res){
  return res.redirect("/views/CadastrarReceitas")
})

routes.get("/administer/recipes",function(req,res){
  return res.redirect("/views/CadastrarReceitas")

}); 
//Rotas da receitas 
server.get("/Hamburguer",function(req,res){
  return res.render("Hamburguer")

});
server.get("/Pizza",function(req,res){
  return res.render("Pizza")

});

server.get("/Asinha",function(req,res){
  return res.render("Asinha")

});
server.get("/Lasanha",function(req,res){
  return res.render("Lasanha")

});
server.get("/Espaguete",function(req,res){
  return res.render("Espaguete")

});
server.get("/Docinhos",function(req,res){
  return res.render("Docinhos")

});

routes.get("/Receitas",function(req,res){
  return res.redirect("Hamburguer")

});
server.listen(5000, function () {
    console.log("server is runing ")

})