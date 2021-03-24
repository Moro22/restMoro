var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//aqui definimos el endpoint (la url para acceder al recurso listarInvitados)
const invitados= require("../modulos/invitados/guest");
router.get('/v1/guest', invitados.listaInvitados)


//Metodo para status

const Status=require("../modulos/status/status");
router.get('/v1/Status', Status.listaStatus)

//Metodo para status

const Organizer=require("../modulos/organizer/organizer");
router.get('/v1/Organizer', Organizer.listaOrganizer)
module.exports = router;

